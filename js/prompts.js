const holder = '****';
const prompts = [
  {
    short: 'Make article into English teaching material',
    text: `
    Please turn the following English article into an English teaching material
  by selecting hard and medium level English words from the news.
  Please provide
    1. Hard and Medium picked English words or phrases from the article
    2  "Is it commonly used words or phrases in daily English or it's a news only English or domain specific words?"
    3. "English explanation"
    4. "English example sentence"
    5. "Traditional Chinese example sentence",

  The same as the provided example below.

  For example:

  example article

  \`\`\`
  President has reiterated that there are "credible reasons" to believe that Indian agents may have been behind the murder of a Honk separatist on our country's soil.

  He first made the allegation on Monday, which India has strongly rejected, calling them "absurd".
  \`\`\`

  example answer

  \`\`\`
  Vocabulary

  Hard
    reiterat (v): say something again or a number of times, typically for emphasis or clarity.
      "reiterat" is not a common English words in daily life, it usually can be seen on news only, especially related to political news.
      "she reiterated that the administration would remain steadfast in its support"
      "她重申政府將繼續堅定支持"

  Medium

    credible reasons : Credible reasons are convincing and sound justified. They aren't baseless claims or speculation.
      "credible reasons" is not a common English words in daily life, it usually can be seen on news only, especially related to political news.
      "The researcher provided credible reasons and solid evidence to support his hypothesis about the cause of the disease."
      "研究人員提供了可信的理由和確鑿的證據來支持他對疾病原因的假設。"

    absurd : wildly unreasonable, illogical, or inappropriate.
      absurd is a common daily English words.
      "the allegations are patently absurd"
      "這些指控顯然是荒謬的"

  \`\`\`

  Article

  \`\`\`
  ****
  \`\`\`
  `,
    defaults: [
      `William Shakespeare has had an incredible influence on not just English literature, but the English language in general. Also known as "the Bard of Avon," he is the author of many of the plays that most students in English-speaking countries study in school. Even people who have not read his works know some of Shakespeare's most famous lines.
    `,
    ],
  },
  {
    short: 'List sentences of a En word in En&Ch table',
    text: `List down ${holder} of English example sentences includes this word "${holder}" in day-to-day English, also explain it first both in English and Traditional Chinese.
Make it a table with 4 columns:
    
  1. example sentence in in English 
  2. example sentence of column 1 in traditional Chinese 
  3. English word 
  4. translated word of column 3 in traditional Chinese`,
    defaults: ['5', 'transportation'],
  },
  {
    short: 'List related sentences of a En word in En&Ch table',
    text: `List down ${holder} of English words in ${holder} English level related to "${holder}". 
Make it a table with 4 columns:
    
  1. example sentence in in English 
  2. example sentence of column 1 in traditional Chinese 
  3. English word 
  4. translated word of column 3 in traditional Chinese`,
    defaults: ['5', 'advanced', 'transportation'],
  },

  {
    short: 'Explain and translate to Cn',
    text: `Explain in English and translate in Traditional Chinese for the following texts in quotes "****".

    Example
    
    "We want to get a tentative agreement, but our members have made it very clear, if that's not achievable at the bargaining table, then they're prepared to take job action."

    And you should reply:

    Explanation: "This sentence explains that while the union's goal is to reach an agreement, if that is not possible through negotiations, the members are willing to take job action."
    Traditional Chinese translation: "我們希望達成一個暫時的協議，但是我們的成員已經非常清楚，如果在談判桌上不可行，那麼他們願意採取行動。"
    `,
    defaults: [
      `We want to get a tentative agreement, but our members have made it very clear, if that's not achievable at the bargaining table, then they're prepared to take job action.`,
    ],
  },
  {
    short: 'Explain and pick up words with Cn translation',
    text: `Explain and pick up 3 English words or phrases worth noting for a English learner related to the texts and making a table in following texts in quotes 

    """
    ****
    """
    
    
    For example:
    
    Texts: "We want to get a tentative agreement, but our members have made it very clear, if that's not achievable at the bargaining table, then they're prepared to take job action."
    
    Then you reply:
    
    Explanation in English: "This sentence explains that while the union's goal is to reach an agreement, if that is not possible through negotiations, the members are willing to take job action."
    Words: tentative, bargaining table, job action
    
    | English sentence                                                              | Translated in Chinese                      | Word/Phrase  |  Chinese Word/Phrase   |
    |-------------------------------------------------------------------------------|--------------------------------------------|--------------|-------------------------|
    | The team has made a tentative agreement, but it still needs to be finalized.               | 這個團隊已經達成了暫定協議，但仍需要最後確           | Tentative    | 暫定的    |
    | The two sides are now sitting at the bargaining table trying to reach a deal.              | 雙方現在坐在談判桌前，試圖達成協議。                | Bargaining Table | 談判桌|`,
    defaults: [
      'Sage was trained on a transformer-based language model called GPT-2, which has 1.5 billion parameters.',
    ],
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
