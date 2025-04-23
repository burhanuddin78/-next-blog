const coding = `Generate a detailed and unique blog post in the **"Coding"** category as a **strictly formatted JSON object** using the structure below:

\`\`\`json
{
  "title": "Engaging and Descriptive Title",
  "description": "HTML-formatted blog post content suitable for React-Quill npm lib, ensuring valid JSON encoding."
}
\`\`\`

### **Strict Output Requirements:**

1. **Title:**  
   - Must be **100% unique**, **human-like**, and **never generated before**.  
   - Use a clear, descriptive plain string—**no HTML or special characters**.  
   - Avoid commonly discussed topics like “JavaScript Promises,” “React Hooks,” or “Node.js Basics.”

2. **Description:**  
   - Must be **HTML-formatted**, suitable for rendering in **React-Quill**.  
   - Ensure **proper paragraph spacing** using "<p>" or "<br>".  
   - Use valid HTML tags such as "<p>", "<strong>", "<em>", "<h2>", "<h3>", "<ul>", "<ol>", "<pre><code>".  
   - Format **code snippets** with "<pre><code>".  
   - Include **an introduction, examples, and a conclusion**.  
   - Avoid headings in the content and **do not repeat the title**.  
   - **Escape all quotes and special characters** for valid JSON.
   - Do **not** include the title in the description.

3. **Strict Formatting Rules:**  
   - No Markdown, comments, or extra notes.  
   - Output must be a **single JSON object** with **valid JSON encoding**.  
   - Ensure clean, strictly structured HTML content compatible with React-Quill.
`;

const style = `Generate a detailed and unique blog post in the **"Style"** category as a **strictly formatted JSON object** using the structure below:

\`\`\`json
{
  "title": "Engaging and Descriptive Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Strict Output Requirements:**

1. **Title:**  
   - Must be **100% unique**, **original**, and **never generated before**.  
   - Use a plain string with no HTML, special characters, or clichés.  
   - Avoid titles like “Summer Fashion Tips,” “Winter Outfit Ideas,” , "Unexpected Texture" or “Reimagining Retro. etc”

2. **Description:**  
   - Must be **HTML-formatted**, readable, and React-Quill compatible.  
   - Use tags like "<p>", "<strong>", "<em>", "<h2>", "<ul>", "<ol>", "<blockquote>".  
   - Use "<p>" or "<br>" for line/paragraph breaks.  
   - Include **an introduction, detailed examples, and a conclusion**.  
   - Use **<ul>/<ol>** for step-by-step guides or style checklists.  
   - **Escape all special characters** for JSON validity.
   - Do **not** include the title in the description.

3. **Content Focus:**  
   - Cover **styling tips, outfit guides, trends, color combos**, or **beauty hacks**.  
   - Provide **practical, unique advice**—avoid generic or overused ideas.  
   - Use **<strong>** and **<em>** for key points and emphasis.  
   - Include **<blockquote>** for expert insights when relevant.

4. **Strict Formatting Rules:**  
   - No Markdown, comments, or extra content outside JSON.  
   - Output must be a **single valid JSON object**.  
   - Must be fully HTML-structured for rendering in React-Quill.
`;

const fashion = `Generate a unique and detailed blog post in the **"Fashion"** category as a **JSON object** using the structure below:

\`\`\`json
{
  "title": "Descriptive and Relevant Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Output Requirements:**

1. **Title:**  
   - Must be **original**, **unique**, and never reused.  
   - Avoid phrases like “Effortless Chic,” “Wardrobe Essentials,” or “Timeless Trends.”  
   - Title should reflect the blog content and be a plain string with no formatting.

2. **Description:**  
   - Must be **HTML-formatted**, compatible with **React-Quill**.  
   - Use proper tags like "<p>", "<strong>", "<em>", "<h2>", "<ul>", "<ol>".  
   - Include clear paragraph breaks and escape all special characters.  
   - Structure:  
     - **Introduction** with clear context  
     - **Main Content**: trends, ideas, guides  
     - **Examples**: real-world or styled cases  
     - **Conclusion**: summary and takeaways  
   - Do **not** include the title in the description.

3. **Strict Formatting:**  
   - No Markdown, comments, or extra output.  
   - Must be a **valid JSON object** with escaped content ready for rendering.

### **Uniqueness Criteria:**  
- 100% unique title  
- Avoid clichés and generic fashion terms  
- Original, well-structured content  
- Fully valid and escaped JSON
`;

const food = `Generate a unique, detailed blog post in the **"Food"** category as a **JSON object** using the structure below:

\`\`\`json
{
  "title": "Descriptive and Unique Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Output Requirements:**

1. **Title:**  
   - Must be **100% original**, engaging, and **never used before**.  
   - Avoid titles like “Delicious Recipes,” “Unlocking Umami,” or “Healthy Eating Tips.”  
   - No special formatting, symbols, or HTML.

2. **Description:**  
   - Use HTML tags suitable for React-Quill: "<p>", "<strong>", "<em>", "<ul>", "<ol>", "<h2>".  
   - Ensure proper line breaks and JSON encoding.  
   - Structure:  
     - **Introduction**: background or motivation  
     - **Main Body**: food insights, cooking methods, healthy habits  
     - **Details**: ingredients, steps, or presentation  
     - **Examples**: pairings or cultural spins  
     - **Conclusion**: wrap-up and tips  
   - Do **not** include the title in the description.

3. **Strict Formatting:**  
   - Escape all quotes and special characters.  
   - Must be a **single, clean JSON object**.

### **Uniqueness Criteria:**  
- Avoid repeated content or filler text  
- Ensure originality and practicality  
- Use proper structure and escaping for JSON validity
`;

const culture = `Generate a unique, detailed blog post in the **"Culture"** category as a **JSON object** using the structure below:

\`\`\`json
{
  "title": "Engaging and Unique Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Output Requirements:**

1. **Title:**  
   - Must be **100% unique**, engaging, and **never generated before**.  
   - Avoid generic titles like “Cultural Traditions Around the World” or “The Whispering Walls.”  
   - No HTML or special characters in the title.

2. **Description:**  
   - Use **valid HTML tags**: "<p>", "<em>", "<strong>", "<ul>", "<ol>", etc.  
   - Ensure readability with paragraph spacing and JSON encoding.  
   - Structure:  
     - **Introduction**: context and cultural relevance  
     - **Body**: unique cultural practices, heritage, or contemporary culture  
     - **Examples**: real-life applications or comparisons  
     - **Conclusion**: insights and takeaways  
      - Do **not** include the title in the description.
3. **Strict Formatting:**  
   - Must be valid JSON  
   - No Markdown or extra content  
   - Escape quotes and special characters for JSON validity

### **Uniqueness Criteria:**  
- Avoid overused cultural topics  
- Ensure originality, accuracy, and clean formatting  
- Provide value and fresh perspective
`;

const travel = `Generate a unique, detailed blog post in the **"Travel"** category as a **strictly formatted JSON object** with the following structure:

\`\`\`json
{
  "title": "Descriptive and Unique Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Output Requirements:**

1. **Title:**  
   - Generate a **100% unique, human-like title** that has **never been generated before**.  
   - Make the title **engaging**, **descriptive**, and relevant to a travel experience or insight.  
   - Avoid overused travel clichés like "Wanderlust Diaries," "Hidden Gems," or "Top 10 Destinations."  
   - Use **plain text only**—no HTML tags or special characters.

2. **Description:**  
   - Write a **compelling, original blog post** formatted using valid HTML tags like "<p>", "<strong>", "<em>", "<ul>", "<ol>", "<h2>", and "<pre>".  
   - Ensure **line breaks** and **paragraph spacing** for clear readability.  
   - **Do not repeat the title** in the description.  
   - Structure the blog post as follows:  
     - **Introduction:** Set the stage with context or background.  
     - **Main Body:** Cover topics like cultural encounters, scenic routes, travel hacks, local experiences, or offbeat adventures.  
     - **Examples:** Include detailed anecdotes, unique places, travel mistakes, or local interactions.  
     - **Conclusion:** Provide key insights, tips, or reflections.  
   - Use **<strong>** and **<em>** for emphasis and highlight key terms or locations.  
   - **Escape all quotes and special characters** to maintain valid JSON formatting.
   - Do **not** include the title in the description.

3. **Content Focus:**  
   - Emphasize **lesser-known locations**, **personal journeys**, or **travel philosophies**.  
   - Avoid repetitive topics like “Top Beaches” or “Budget Travel Basics.”  
   - Keep the content insightful, unique, and experience-based.

4. **Strict Formatting Rules:**  
   - **No Markdown**, extra notes, or comments.  
   - Ensure **valid JSON formatting** with escaped characters.  
   - Output must be a **single JSON object**, with **no surrounding text**.  
   - Must be directly **renderable in React-Quill**.

---

### **Uniqueness Criteria:**
- **Unique Title:** Ensure the title is **100% original** and never reused.  
- Avoid generic, trending titles and focus on **fresh perspectives**.  
- Content must be **practical**, **reflective**, and **non-repetitive**.  

Ensure the generated JSON object is **clean, properly escaped, and React-Quill-ready**, without formatting or structural issues.`;

const sports = `Generate a unique, detailed blog post in the **"Sports"** category as a **strictly formatted JSON object** with the following structure:

\`\`\`json
{
  "title": "Engaging and Unique Title",
  "description": "HTML-formatted blog post content suitable for React-Quill, ensuring valid JSON encoding."
}
\`\`\`

### **Output Requirements:**

1. **Title:**  
   - Create a **100% unique, engaging title** never previously generated.  
   - Avoid generic sports titles like “Champions of the Decade,” “Game Day Tips,” or “History of Football.”  
   - Use **plain string text**—no HTML tags, special characters, or symbols.  
   - Make sure the title is **contextually aligned** with the blog body.

2. **Description:**  
   - Write a **detailed blog post** using valid HTML tags suitable for React-Quill ("<p>", "<strong>", "<em>", "<ul>", "<ol>", "<pre>", etc.).  
   - Ensure **clear paragraph spacing** and **escaped characters** for JSON encoding.  
   - The blog should be **structured as follows**:  
     - **Introduction:** Introduce the sport or context.  
     - **Main Content:** Dive into unique insights—such as training methods, behind-the-scenes strategies, mental preparation, historical moments, or tech in sports.  
     - **Examples:** Showcase real-world examples, athlete anecdotes, or match breakdowns.  
     - **Conclusion:** Summarize learnings, outlook, or key messages.  
   - Use **bold (<strong>)**, **italic (<em>)**, and **lists** for better emphasis.  
   - Do **not** include the title in the description.

3. **Content Focus:**  
   - Highlight **less-discussed aspects** of sports like biomechanics, mental focus, training routines, grassroots programs, etc.  
   - Avoid overdone topics like “Top 10 Goals” or “Best Matches Ever.”  
   - Ensure content is **original, insightful**, and **non-repetitive**.

4. **Strict Formatting Rules:**  
   - **No Markdown**, comments, or additional notes.  
   - Output must be a **valid JSON object**, fully escaped.  
   - The output must contain **only the JSON**, without any surrounding text.  
   - Should be directly renderable using **React-Quill**.

---

### **Uniqueness Criteria:**  
- **Unique Title:** Must be fresh and 100% original.  
- Avoid clichés and repeat topics.  
- Ensure thoughtful structure and **clear HTML formatting**.

Ensure the generated JSON object is **clean**, **valid**, and **React-Quill-ready** without formatting issues or clichés.`;

const prompts = { coding, travel, culture, food, fashion, style, sports };
export default prompts;
