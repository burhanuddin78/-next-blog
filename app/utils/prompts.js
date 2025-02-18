const coding = `Generate a detailed unique blog post in the "Coding" category as an **object** with the following JSON Object structure:  

{
  "title": "Engaging and Descriptive Title",
  "description": "Detailed blog post content with Formatted text for React-Quill with proper line breaks",
}


### **Requirements:**  
- **Title:** Provide an engaging and descriptive title in the form of an object property ("title").  
- **Description:**  
  - Do not include title in description as heading or any other heading and spaces in the start of description.
  - Write a compelling description in a format suitable for **React-Quill** (HTML).  
  - Use proper HTML tags ("<p>", "<strong>", "<em>", etc.).  
  - Ensure correct **line breaks** ("<br>" or "<p>" tags) for better readability.  
  - The description should be structured well and visually appealing.  
  - Structure the content using appropriate headings ("<h2>", "<h3>", etc.).  
  - Ensure an engaging introduction that provides proper context.  
  - Include **code snippets** where relevant and format them correctly.  
  - Keep the content informative, structured logically, and developer-friendly.  
  - Provide relevant **examples or use cases**.  
  - Ensure **proper line breaks** and paragraph spacing for readability.  
  - End with a well-rounded conclusion summarizing key takeaways.  

The final output should be a **structured object**, making it ready for rendering in a React-based application using **React-Quill** for display, ensuring proper line breaks and formatting.`;

const style = `Generate a detailed unique blog post in the **"Style"** category as an **object** with the following JSON Object structure:  

{
  "title": "Engaging and Descriptive Title",
  "description": "Detailed blog post content with Formatted text for React-Quill with proper line breaks",
}


### **Requirements:**  
- **Title:** Provide an engaging and descriptive title in the form of an object property ("title").  
- **Description:**  
  - Do not include title in description as heading or any other heading and spaces in the start of description.
  - Write a compelling description in a format suitable for **React-Quill** (HTML).  
  - Use proper HTML tags ("<p>", "<strong>", "<em>", "<br>", etc.) for styling.  
  - Ensure correct **line breaks** and paragraph spacing for readability.  
  - The description should be structured well and visually appealing.  
  - Structure the content using appropriate headings ("<h2>", "<h3>", etc.).  
  - Ensure an engaging introduction that provides proper context.  
  - Discuss **fashion trends, styling tips, outfit ideas, color combinations, or beauty insights**, depending on the topic.  
  - Include relevant **examples, images (if applicable), or styling guides**.  
  - Ensure **proper line breaks** and paragraph spacing for readability.  
  - Use **formatted text** ("<strong>", "<em>", lists, blockquotes) for better presentation.  
  - End with a well-rounded **conclusion** summarizing key takeaways and styling advice.  

The final output should be a **structured object**, making it ready for rendering in a React-based application using **React-Quill**, ensuring proper line breaks and formatting for a visually appealing display.`;

const fashion = `Generate a detailed unique blog post in the **"Fashion"** category as an **object** with the following JSON Object structure:  

{
  "title": "Engaging and Descriptive Title",
  "description": "Detailed blog post content with Formatted text for React-Quill with proper line breaks",
}

### **Requirements:**  
- **Title:** Provide an engaging and descriptive title in the form of an object property ("title").  
- **Description:**  
  - Do not include title in description as heading or any other heading and spaces in the start of description.
  - Write a compelling description in a format suitable for **React-Quill** (HTML).  
  - Use proper HTML tags ("<p>", "<strong>", "<em>", "<br>", etc.) for styling.  
  - Ensure correct **line breaks** and paragraph spacing for readability.  
  - The description should be well-structured and visually appealing.  
  - Structure the content using appropriate headings ("<h2>", "<h3>", etc.).  
  - Ensure an **engaging introduction** that sets the tone and provides context.  
  - Discuss **fashion trends, seasonal outfit ideas, styling tips, wardrobe essentials, or celebrity-inspired fashion**, depending on the topic.  
  - Include **color palettes, fabric choices, accessorizing tips, and do’s & don’ts** for styling.  
  - Provide relevant **examples, images (if applicable), or links to recommended fashion items**.  
  - Ensure **proper line breaks** and paragraph spacing for readability.  
  - Use **formatted text** ("<strong>", "<em>", lists, blockquotes) for better presentation.  
  - End with a well-rounded **conclusion** summarizing key takeaways and fashion advice.  

The final output should be a **structured object**, making it ready for rendering in a React-based application using **React-Quill**, ensuring proper line breaks and formatting for a visually appealing display.`;

const food = `Generate a detailed unique blog post in the **"Food"** category as an **object** with the following JSON Object structure:  


{
  "title": "Engaging and Descriptive Title",
  "description": "Detailed blog post content with Formatted text for React-Quill with proper line breaks",
}


### **Requirements:**  
- **Title:** Provide an engaging and descriptive title in the form of an object property ("title").  
- **Description:**  
  - Do not include title in description as heading or any other heading and spaces in the start of description.
  - Write a compelling description in a format suitable for **React-Quill** (HTML).  
  - Use proper HTML tags ("<p>", "<strong>", "<em>", "<br>", etc.) for styling.  
  - Ensure correct **line breaks** and paragraph spacing for readability.  
  - The description should be structured well and visually appealing.  
- **Blog Content:**  
  - Structure the content using appropriate headings ("<h2>", "<h3>", etc.).  
  - Ensure an **engaging introduction** that provides context and grabs attention.  
  - Discuss **recipes, cooking tips, healthy eating, food trends, restaurant reviews, or cultural cuisines**, depending on the topic.  
  - Include **ingredients, step-by-step instructions, preparation time, and cooking techniques** if writing a recipe.  
  - Provide relevant **examples, food pairings, presentation tips, and plating suggestions**.  
  - Ensure **proper line breaks** and paragraph spacing for readability.  
  - Use **formatted text** ("<strong>", "<em>", lists, blockquotes) for better presentation.  
  - End with a well-rounded **conclusion**, summarizing key takeaways and any additional recommendations.  

The final output should be a **structured object**, making it ready for rendering in a React-based application using **React-Quill**, ensuring proper line breaks and formatting for a visually appealing display.`;

const culture = `Generate a detailed unique blog post in the **"Culture"** category as an **object** with the following JSON Object structure:  

json
:{
  "title": "Engaging and Descriptive Title",
  "description": "Detailed blog post content with Formatted text for React-Quill with proper line breaks",
}


### **Requirements:**  
- **Title:** Provide an engaging and descriptive title in the form of an object property ("title").  
- **Description:**  
  - Do not include title in description as heading or any other heading and spaces in the start of description.
  - Write a compelling description in a format suitable for **React-Quill** (HTML).  
  - Use proper HTML tags ("<p>", "<strong>", "<em>", "<br>", etc.) for styling.  
  - Ensure correct **line breaks** and paragraph spacing for readability.  
  - The description should be structured well and visually appealing.  
  - Structure the content using appropriate headings ("<h2>", "<h3>", etc.).  
  - Ensure an **engaging introduction** that provides context and captures interest.  
  - Discuss **cultural traditions, historical influences, societal norms, art, music, language, or global perspectives**, depending on the topic.  
  - Include **examples, anecdotes, and insights into how culture shapes identity and interactions**.  
  - Explore **cross-cultural comparisons, evolving trends, or the impact of globalization** if relevant.  
  - Ensure **proper line breaks** and paragraph spacing for readability.  
  - Use **formatted text** ("<strong>", "<em>", lists, blockquotes) for better presentation.  
  - End with a well-rounded **conclusion**, summarizing key takeaways and inviting discussion or reflection.  

The final output should be a **structured object**, making it ready for rendering in a React-based application using **React-Quill**, ensuring proper line breaks and formatting for a visually appealing display.`;

const travel = `Generate a detailed unique blog post in the **"Travel"** category as an **object** with the following JSON Object structure:  


{
  "title": "Engaging and Descriptive Title",
  "description": "Detailed blog post content with Formatted text for React-Quill with proper line breaks",
}


### **Requirements:**  
- **Title:** Provide an engaging and descriptive title in the form of an object property ("title").  
- **Description:**  
  - Do not include title in description as heading or any other heading and spaces in the start of description.
  - Write a compelling description in a format suitable for **React-Quill** (HTML).  
  - Use proper HTML tags ("<p>", "<strong>", "<em>", "<br>", etc.) for styling.  
  - Ensure correct **line breaks** and paragraph spacing for readability.  
  - The description should be well-structured and visually appealing.  
  - Structure the content using appropriate headings ("<h2>", "<h3>", etc.).  
  - Ensure an **engaging introduction** that sets the scene and provides context.  
  - Discuss **top travel destinations, hidden gems, travel tips, itineraries, cultural experiences, or budget-friendly travel hacks**, depending on the topic.  
  - Include **must-visit attractions, local cuisine recommendations, and transportation tips**.  
  - Provide relevant **examples, packing guides, travel safety advice, and personal experiences**.  
  - Ensure **proper line breaks** and paragraph spacing for readability.  
  - Use **formatted text** ("<strong>", "<em>", lists, blockquotes) for better presentation.  
  - End with a well-rounded **conclusion**, summarizing key takeaways and encouraging readers to explore new places.  

The final output should be a **structured object**, making it ready for rendering in a React-based application using **React-Quill**, ensuring proper line breaks and formatting for a visually appealing display.`;

const prompts = { coding, travel, culture, food, fashion, style };
export default prompts;
