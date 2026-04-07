## 🚀 Getting Started

Follow these steps to get the project running on your local machine:

1. **Install Node.js** Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

2. **Clone the Repository** Open your terminal and run:

   ```bash
   git clone [repository-link]
   ```

3. **Install Dependencies** Navigate into the project folder and install the required packages:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables** Create a file named `.env` in the root directory and add your API key:

   ```env
   VITE_EXCHANGE_RATE_API_KEY=your_api_key_here
   ```

5. **Run the Development Server** Start the project locally:
   ```bash
   npm run dev
   ```

---

## 🔑 How to Get the Currency API Key

The top ticker uses **ExchangeRate-API** to provide real-time currency rates. To generate your free key:

1. Visit [ExchangeRate-API.com](https://www.exchangerate-api.com/).
2. Enter your email in the **"Get Free Key"** box on the homepage.
3. Confirm your email address via the link sent to your inbox.
4. Copy your unique **API Key** from your dashboard.
5. Paste it into your `.env` file as shown in the step above.

_Note: The free tier allows for 1,500 API requests per month, which is plenty for development and testing._

---

## 🛠 Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Navigation**: React Router DOM
- **Data Fetching**: Fetch API / ExchangeRate-API

---

## 📁 Project Structure

- `/src/components`: UI components like `Header`, `CurrencyTicker`, and `NewsCard`.
- `/src/assets`: Images and static files (e.g., `logo.png`).
- `.env`: (Private) API keys and environment configurations.
- `tailwind.config.js`: Custom theme and grid configurations for the news section.

---

## 📝 Features Implemented

- **Pinned News System**: A $2 \times 2$ grid-spanning feature card for high-priority news.
- **Infinite Currency Ticker**: A seamless, auto-scrolling bar at the top with "Rise/Fall" color indicators.
- **Responsive Navigation**: Mobile-friendly header with a slide-out menu and custom branding.

```

```
