import type { NextApiRequest, NextApiResponse } from 'next';
import cohere from 'cohere-ai';

type RequestBody = {
  text: string;
};

type Data = {
  text: string;
};

type Error = {
  message: string;
};

cohere.init(process.env.PRIVATE_COHERE_API_KEY!, '2022-12-06');

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { text }: RequestBody = req.body;
      const cohereRes = await cohere.generate({
        model: 'xlarge',
        prompt: `This is a spell checker generator.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old."
--
Incorrect sample: "I don't can know."
Correct sample: "I don't know."
--
Incorrect sample: "Do you know when your coming over?"
Correct sample: "Do you know when you're coming over?"
--
--
Incorrect sample: "Don't tell me that is raining!"
Correct sample: "Don't tell me that it's raining!"
--
Incorrect sample: "${text}"
Correct sample:`,
        max_tokens: 40,
        temperature: 0.3,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ['--'],
        return_likelihoods: 'NONE'
      });

      const { text: correctedText } = cohereRes.body.generations[0];
      const cleanText = correctedText
        .replace('--', '')
        .replaceAll('"', '')
        .trim();

      return res.status(200).json({ text: cleanText });
    default:
      res.status(500).json({ message: 'Invalid type request.' });
  }
};

export default handler;
