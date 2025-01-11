# 🌌 aiStoryHeaven

Welcome to **aiStoryHeaven.fun**, where innovation meets storytelling. Powered by AI, our platform delivers fresh, engaging blog content every night. From tech trends to lifestyle tips, we cover it all—automatically. With **Next.js**, **NextAuth**, and **OpenAI**, we’ve crafted a seamless experience that blends technology with creativity. Explore **aiStoryHeaven** today and dive into a world of endless possibilities!

**Domain:** [aiStoryHeaven.fun](https://aiStoryHeaven.fun)

**aiStoryHeaven** is your gateway to an endless realm of captivating blogs, powered by cutting-edge AI. Every night, our AI assistant crafts fresh content across various categories, delivered seamlessly through automated cron jobs.

Whether you're looking for tech insights, lifestyle tips, or thought-provoking reads, **aiStoryHeaven** has you covered—just sit back and let the stories flow.

## 🌟 Features

- **AI-Powered Content:** Fresh, engaging blogs generated daily using AI.
- **Automated Cron Jobs:** Content updates every night without manual intervention.
- **Seamless Authentication:** Secure user access with NextAuth.
- **Lightning-Fast Delivery:** Blogs served via AWS CloudFront and S3 for optimal performance.
- **Modern Tech Stack:** Built with Next.js for blazing-fast pages and smooth user experience.

## 🛠 Tech Stack

- **Next.js**: For building a modern, SEO-friendly web app.
- **NextAuth**: Simplified authentication.
- **OpenAI API**: Generates AI-driven blog content.
- **CloudFront + S3**: Ensures fast and reliable content delivery.
- **Cron Jobs**: Automates nightly blog creation.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Steps

1. Clone the repo:

   ```bash
   git clone https://github.com/burhanuddin78/-next-blog.git
   cd next-blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. **Create a `.env.local` file:**  
   Add your environment variables for secure configuration. Create a file named `.env.local` in the project root and include the following:

   ```env
   NEXT_PUBLIC_SITE_URL=https://example.com

   GOOGLE_CLIENT_ID= GOOGLE_CLIENT_ID
   GOOGLE_CLIENT_SECRET= GOOGLE_CLIENT_SECRET

   NEXTAUTH_URL= NEXTAUTH_URL
   NEXTAUTH_SECRET=your_nextauth_secret

   MONGODB_URI= MONGODB_URI

   OPENAI_API_KEY=your_openai_api_key

   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   AWS_S3_BUCKET_NAME=your_bucket_name
   ```

   Replace the placeholders with your actual credentials.

4. Run the app locally:

   ```bash
   npm run dev
   ```

5. Visit [http://localhost:3000](http://localhost:3000) to see your site in action.

## 📈 Roadmap

- Add user-customizable content categories
- Improve AI-generated content accuracy
- Introduce premium subscription for exclusive blogs
- Implement dark mode

## 📝 License

This project is licensed under the MIT License.
