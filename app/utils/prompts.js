const coding = `Generate a detailed and unique blog post in the "Coding" category as a **strictly formatted JSON object** with the following structure:

\`\`\`json
{
  "title": "Engaging and Descriptive Title",
  "description": "HTML-formatted blog post content suitable for React-Quill npm lib, ensuring valid JSON encoding."
}
\`\`\`

### **Strict Output Requirements:**
1. **Title:**  
   - Generate a **unique, human-like title** that has **never been generated before**, ensuring originality.  
   - Provide a clear, concise, and **unique** title not commonly covered or previously generated.  
   - Ensure the title is a plain string without HTML or special characters.  

2. **Description:**  
   - Must be **HTML-formatted**, suitable for rendering in **React-Quill**.  
   - Use valid HTML tags like "<p>", "<strong>", "<em>", "<h2>", "<h3>", and "<pre>".  
   - Ensure **line breaks** using "<p>" or "<br>" for paragraph separation.  
   - Format **code snippets** using the "<pre><code>" structure.  
   - Avoid headings within the description and redundant whitespace.  
   - Structure the content logically with an introduction, examples, and conclusion.  
   - **Escape all quotes and special characters** to ensure valid JSON formatting.
   - Ensure **proper line breaks** and paragraph spacing for readability.    

### **Uniqueness Criteria:**  
- **Unique Title:** Ensure the title is **100% unique** and **never generated before**
- Do not generate blog posts on commonly covered topics like "JavaScript Promises," "React Hooks," or "Node.js Basics."  
- Ensure the topic is **original**, thought-provoking, and less commonly discussed.  
- Avoid generating blog posts similar to previous requests or the same theme.  

### **Strict Formatting Rules:**  
- **No Markdown, extra notes, or comments.**  
- Ensure **valid JSON encoding** with properly escaped characters.  
- The output must be a **single JSON object** without surrounding text.  
- Strictly enforce **HTML structure** for rendering in React-Quill.  

Ensure that the generated JSON object is **clean, unique, and properly formatted**, without any surrounding text or formatting issues.`;

const style = `Generate a detailed and unique blog post in the **"Style"** category as a **strictly formatted JSON object** with the following structure:

\`\`\`json
{
  "title": "Engaging and Descriptive Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Strict Output Requirements:**

1. **Title:**  
   - Generate a **unique, human-like title** that has **never been generated before**, ensuring originality.  
   - Ensure the title is a plain string without HTML or special characters.  
   - Avoid generic titles like "Summer Fashion Tips", "Reimagining Retro: " or "Winter Outfit Ideas. etc"

2. **Description:**  
   - Must be **HTML-formatted**, suitable for rendering in **React-Quill**.  
   - Use valid HTML tags like "<p>", "<strong>", "<em>", "<h2>", "<h3>", and "<pre>".  
   - Ensure **line breaks** using "<p>" or "<br>" for paragraph separation.  
   - Format **styling guides** using ordered ("<ol>") or unordered lists ("<ul>").  
   - Avoid including the title or redundant whitespace within the description.  
   - Structure the content logically with an introduction, examples, and conclusion.  
   - **Escape all quotes and special characters** to ensure valid JSON formatting.
   - Ensure **proper line breaks** and paragraph spacing for readability.  

3. **Content Focus:**  
   - Discuss **fashion trends, styling tips, outfit ideas, color combinations, or beauty insights.**  
   - Ensure **originality** by avoiding common topics like "Basic Wardrobe Essentials" or "Classic Outfit Ideas."  
   - Provide **relevant examples** or step-by-step styling guides where appropriate.  
   - Format text using "**<strong>**" for emphasis and "**<em>**" for highlighting key points.  
   - Use **blockquotes ("<blockquote>")** for style advice or expert insights.  

4. **Strict Formatting Rules:**  
   - **No Markdown, extra notes, or comments.**  
   - Ensure **valid JSON encoding** with properly escaped characters.  
   - The output must be a **single JSON object** without surrounding text.  
   - Strictly enforce **HTML structure** for rendering in React-Quill.  

### **Uniqueness Criteria:**  
- **Unique Title:** Ensure the title is **100% unique** and **never generated before**
- Avoid generating blog posts on commonly covered topics like "Summer Fashion Tips" "Reimagining"  or "Basic Wardrobe Essentials." etc  
- Ensure the topic is **original**, creative, and less commonly discussed.  
- Avoid generating blog posts similar to previous requests or the same theme.  

Ensure that the generated JSON object is **clean, unique, and properly formatted**, without any surrounding text or formatting issues.`;

const fashion = `Generate a unique, detailed blog post in the **"Fashion"** category as a **JSON object** with the following structure:

\`\`\`json
{
  "title": "Descriptive and Relevant Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Output Requirements:**

1. **Title:**  
   - Generate a **unique, human-like title** that has **never been generated before**, ensuring originality.  
   - Provide a **descriptive and contextually relevant title** as a plain string.  
   - Avoid **generic, overused phrases** like *"Effortless Chic"*, *"Wardrobe Essentials"*, or *"Latest Trends."*  
   - Ensure the title reflects the **specific blog content** and avoids creative clichés.  
   - No HTML tags, special characters, or additional formatting.

2. **Description:**  
   - Write a **compelling, unique blog post** formatted for **React-Quill** using HTML tags ("<p>", "<strong>", "<em>", "<h2>", "<ul>", etc.).  
   - Ensure proper **line breaks**, **paragraph spacing**, and **JSON encoding.**  
   - **Do not include the title within the description.**  
   - Ensure the content is **structured** with:  
     - **Introduction:** Clear context and engaging opening.  
     - **Main Body:** Fashion trends, styling tips, color combinations, or outfit ideas.  
     - **Examples:** Real-world use cases or styling guides (without clichéd fashion jargon).  
     - **Conclusion:** Key takeaways and final fashion advice.  
   - Use **formatted text** ("<strong>", "<em>") for emphasis and lists for clarity.
   - Ensure **proper line breaks** and paragraph spacing for readability.  

3. **Content Focus:**  
   - Discuss **practical fashion insights** like:  
     - **Seasonal wardrobe ideas**, **fabric choices**, or **color trends**.  
     - **Styling tips for work, casual, or events**, avoiding overused "chic" language.  
     - **Fashion do’s and don’ts**, **celebrity-inspired ideas**, or **sustainable fashion.**  
   - Avoid **overly creative phrases** like *"Effortless Chic"* or *"Timeless Style."*  
   - Ensure **proper paragraph spacing** and **escape special characters** for JSON validity.

4. **Strict Formatting:**  
   - Ensure valid **JSON output** without syntax errors.  
   - No **surrounding comments, Markdown, or extra formatting.**  
   - The output must be a **single JSON object**, ready for rendering.  

---

### **Uniqueness Criteria:**
- **Unique Title:** Ensure the title is **100% unique** and **never generated before**
- **No clichés:** Avoid titles like *"Effortless Chic"*, *"Classic Wardrobe"*, or *"Ultimate Guide."*  
- **Fresh Content:** Ensure blog topics are unique, practical, and avoid repetition.  
- **Clear JSON:** Escape quotes and special characters properly.

---

Ensure the generated JSON object is **unique, clean, and React-Quill-ready**, without clichéd language or formatting issues.`;

const food = `Generate a unique, detailed blog post in the **"Food"** category as a **JSON object** with the following structure:

\`\`\`json
{
  "title": "Descriptive and Unique Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Output Requirements:**

1. **Title:**  
   - Generate a **unique, human-like title** that has **never been generated before**, ensuring originality.  
   - Ensure the title is **descriptive, engaging**, and relevant to the blog content.  
   - **Do not reuse** previously generated titles under any circumstances.  
   - Avoid generic phrases or common titles like "Delicious Recipes" "Unlocking Umami" or "Healthy Eating Tips." etc.  
   - No HTML tags, special characters, or formatting.

2. **Description:**  
   - Write a **compelling blog post** formatted for **React-Quill** using HTML tags ("<p>", "<strong>", "<em>", "<h2>", "<ul>", etc.).  
   - Ensure proper **line breaks**, **paragraph spacing**, and **JSON encoding** for readability.  
   - **Do not include the title** within the description.  
   - Ensure the content is **structured** with the following sections:  
     - **Introduction:** Context and purpose of the blog post.  
     - **Main Content:** Topic discussion such as recipes, cooking tips, healthy eating, cultural cuisines, or restaurant insights.  
     - **Details:** If it's a recipe, include ingredients, preparation steps, cooking techniques, and presentation tips.  
     - **Examples:** Highlight real-world food pairings, regional variations, or expert suggestions.  
     - **Conclusion:** Summarize key takeaways and recommendations.  
   - Use **formatted text** ("<strong>", "<em>") for emphasis and lists for clarity.
   - Ensure **proper line breaks** and paragraph spacing for readability.  

3. **Content Focus:**  
   - Ensure the topic is **unique** and **practical**, avoiding repetitive ideas.  
   - Discuss one or more of the following:  
     - **Recipes:** Ingredients, steps, and plating ideas.  
     - **Healthy Eating:** Nutritional benefits and tips.  
     - **Food Trends:** Emerging flavors, techniques, or popular dishes.  
     - **Cultural Cuisines:** Regional specialties and traditions.  
     - **Restaurant Reviews:** Dining experiences, ambiance, and signature dishes.  
   - Ensure **no repetitive phrases**, redundant points, or filler content.

4. **Strict Formatting:**  
   - Ensure valid **JSON output** without syntax errors.  
   - Escape quotes and special characters for proper JSON encoding.  
   - The output must be a **single JSON object**, ready for React-Quill rendering.
---

### **Uniqueness Criteria:**

- **Unique Title:** Ensure the title is **100% unique** and **never generated before**.  
- **No Repetition:** Avoid repeated phrases, redundant explanations, or filler words.  
- **Fresh Content:** Ensure the blog post is **original**, **practical**, and free from clichés.  
- **Valid JSON:** Escape special characters and ensure clean output.

---

Ensure the generated JSON object has a **unique title**, **original content**, and is **React-Quill-ready**, without repetition or formatting issues.`;

const culture = `Generate a unique, detailed blog post in the **"Culture"** category as a **JSON object** with the following structure:

\`\`\`json
{
  "title": "Engaging and Unique Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

---

### **Output Requirements:**

1. **Title:**  
   - Generate a **unique, human-like title** that has **never been generated before**, ensuring originality.  
   - Ensure the title is **descriptive**, **engaging**, and **relevant** to the blog content.  
   - **Avoid generic phrases** or common titles like "Cultural Traditions Around the World"  "The Whispering Walls" or "Exploring Art and Music. etc"  
   - No HTML tags, special characters, or formatting in the title.  
   - **Do not reuse** previously generated titles under any circumstances.  

2. **Description:**  
   - Write a **compelling blog post** formatted for **React-Quill** using proper HTML tags ("<p>", "<strong>", "<em>", "<h2>", "<ul>", etc.).  
   - Ensure correct **line breaks**, **paragraph spacing**, and **valid JSON encoding**.  
   - **Do not include the title** within the description.  
   - Structure the content with the following sections:  
     - **Introduction:** Engage readers by providing context and sparking interest.  
     - **Main Content:** Explore cultural aspects such as traditions, history, societal norms, art, music, language, and global perspectives.  
     - **Details:** Include examples, anecdotes, and insights into how culture shapes identity and interactions.  
     - **Comparisons:** If applicable, discuss cross-cultural perspectives or the impact of globalization.  
     - **Conclusion:** Summarize key takeaways and invite reflection or discussion.  
   - Use **formatted text** ("<strong>", "<em>") for emphasis and **lists** for clarity.
   - Ensure **proper line breaks** and paragraph spacing for readability.  

3. **Content Focus:**  
   - Ensure the blog post is **human-like**, **unique**, and **practical**, avoiding repetitive ideas.  
   - Discuss one or more of the following:  
     - **Cultural Traditions:** Festivals, rituals, and unique practices.  
     - **Historical Influences:** How history shapes cultural identity.  
     - **Societal Norms:** Etiquette, values, and social expectations.  
     - **Art and Music:** Cultural expressions and their evolution.  
     - **Language:** Impact of language on cultural identity.  
     - **Global Perspectives:** How globalization reshapes cultural boundaries.  
   - **No filler content**, redundant explanations, or overly formal language.  
   - Ensure the writing **flows naturally**, resembling human-generated content.  

4. **Strict Formatting:**  
   - Ensure valid **JSON output** without syntax errors.  
   - Escape quotes and special characters for proper JSON encoding.  
   - The output must be a **single JSON object**, ready for **React-Quill rendering**.  

---
### **Uniqueness Criteria:**  
- **Unique Title:** Ensure the title is **100% unique** and **never generated before**.  
- **Human-Like Writing:** Ensure content reads as though written by a person, not generated automatically.  
- **No Repetition:** Avoid repeated phrases, redundant points, or filler content.  
- **Fresh Content:** Ensure the blog post is **original**, **practical**, and **free from clichés**.  
- **Valid JSON:** Escape special characters and ensure clean output.

---

Ensure the generated JSON object has a **unique title**, **original human-like content**, and is **React-Quill-ready**, without repetition or formatting issues.`;

const travel = `Generate a unique, detailed blog post in the **"Travel"** category as a **JSON object** with the following structure:

\`\`\`json
{
  "title": "Engaging and Unique Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

---

### **Output Requirements:**

1. **Title:**  
   - Generate a **unique, human-like title** that has **never been generated before**, ensuring originality.  
   - Ensure the title is **descriptive**, **engaging**, and **relevant** to the blog content.  
   - **Avoid generic phrases** like "Top Travel Destinations", "Chasing Waterfalls" or "Best Places to Visit " etc. 
   - No HTML tags, special characters, or formatting in the title.  
   - **Do not reuse** previously generated titles under any circumstances.  

2. **Description:**  
   - Write a **compelling blog post** formatted for **React-Quill** using proper HTML tags ("<p>", "<strong>", "<em>", "<h2>", "<ul>", etc.).  
   - Ensure correct **line breaks**, **paragraph spacing**, and **valid JSON encoding**.  
   - **Do not include the title** within the description.  
   - Structure the content with the following sections:  
     - **Introduction:** Engage readers by providing context and sparking interest.  
     - **Main Content:** Explore travel topics such as destinations, itineraries, travel hacks, cultural experiences, or hidden gems.  
     - **Details:** Highlight must-visit attractions, local cuisines, transportation tips, and personal anecdotes.  
     - **Guides:** If applicable, include packing lists, safety tips, or budget-friendly suggestions.  
     - **Conclusion:** Summarize key takeaways and encourage readers to explore further.  
   - Use **formatted text** ("<strong>", "<em>") for emphasis and **lists** for clarity. 
   - Ensure **proper line breaks** and paragraph spacing for readability.  

3. **Content Focus:**  
   - Ensure the blog post is **human-like**, **unique**, and **practical**, avoiding repetitive ideas.  
   - Discuss one or more of the following:  
     - **Top Destinations:** Popular and underrated places to visit.  
     - **Hidden Gems:** Unique, lesser-known spots worth exploring.  
     - **Travel Tips:** Budget-friendly advice, packing tips, and itineraries.  
     - **Cultural Experiences:** Festivals, traditions, and local practices.  
     - **Food & Cuisine:** Must-try dishes and where to find them.  
   - **No filler content**, redundant explanations, or overly formal language.  
   - Ensure the writing **flows naturally**, resembling human-generated content.  

4. **Strict Formatting:**  
   - Ensure valid **JSON output** without syntax errors.  
   - Escape quotes and special characters for proper JSON encoding.  
   - The output must be a **single JSON object**, ready for **React-Quill rendering**.  

---

### **Uniqueness Criteria:**  
- **Unique Title:** Ensure the title is **100% unique** and **never generated before**.  
- **Human-Like Writing:** Ensure content reads as though written by a person, not generated automatically.  
- **No Repetition:** Avoid repeated phrases, redundant points, or filler content.  
- **Fresh Content:** Ensure the blog post is **original**, **practical**, and **free from clichés**.  
- **Valid JSON:** Escape special characters and ensure clean output.

---

Ensure the generated JSON object has a **unique title**, **original human-like content**, and is **React-Quill-ready**, without repetition or formatting issues.`;

const prompts = { coding, travel, culture, food, fashion, style };
export default prompts;
