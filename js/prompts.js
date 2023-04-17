const holder = '****';
const prompts = [
  {
    short: 'List sentences of a En word in En&Ch table',
    text: `List down ${holder} of English words in ${holder} English level related to "${holder}". 
Make it a table with 4 columns:
    
  1. example sentence in in English 
  2. example sentence of column 1 in traditional Chinese 
  3. English word 
  4. translated word of column 3 in traditional Chinese`,
    defaults: ['5', 'advanced', 'transportation'],
  },
  {
    // https://www.makeuseof.com/how-to-translate-with-chatgpt/
    short: 'Translate to both En&Ch',
    text: `Translate following text in quotes "****", 
    to both English and traditional Chinese one sentence by one sentences from a perspective of a native speaker of both languages.`,
    defaults: ['我每天搭公車上班。'],
  },
  {
    // https://www.makeuseof.com/how-to-translate-with-chatgpt/
    short: `Summarize in layman's terms`,
    text: `Summarize following quoted texts "****" in layman's terms. The texts to be summarized are from ****.`,
    defaults: ['set up the FTP server', 'a news website'],
  },
  {
    // https://github.com/f/awesome-chatgpt-prompts#act-as-a-proofreader
    short: 'Proofreader',
    text: `I want you act as a proofreader. 
    I will provide you texts and I would like you to review them for any spelling, grammar, or punctuation errors.
    Once you have finished reviewing the text, provide me with any necessary corrections or suggestions for improve the text.
    The texts are "****"`,
    defaults: ['This are an apple.'],
  },
  {
    // https://github.com/f/awesome-chatgpt-prompts#act-as-an-it-expert
    short: 'IT expert',
    text: `I want you to act as an IT Expert.
    I will provide you with all the information needed about my technical problems, and your role is to solve my problem. 
    You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. 
    Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful.
    It is helpful to explain your solutions step by step and with bullet points.
    Try to avoid too many technical details, but use them when necessary. 
    I want you to reply with the solution, not write any explanations. 
    My first problem is "****"`,
    defaults: ['my laptop gets an error with a blue screen.'],
  },
];
