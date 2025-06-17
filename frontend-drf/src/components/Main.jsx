import React, { useState } from 'react';

function Main() {
  const [input, setInput] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    const dummyResult = "Stock will rise 📈";
    setPrediction(dummyResult);
  };

  return (
    <main className="container my-5 text-center">
      {/* Introduction Text */}
      <section className="mb-5">
        <h2 className="display-6 fw-bold text-dark mb-3">Welcome to the Stock Prediction Platform</h2>
        <p className="lead text-secondary">
          Our platform uses AI models to help forecast market trends and support your financial decisions.
          Just enter a stock symbol and get an instant prediction!
        </p>
      </section>

      {/* Prediction Box */}
      <div className="predict-box mx-auto">
        <h2 className="text-primary mb-4">📊 Enter Stock Symbol</h2>
        <div className="input-group mb-3 justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            placeholder="e.g., AAPL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-success ms-2" onClick={handlePredict}>
            Predict
          </button>
        </div>
        {prediction && (
          <div className="alert alert-success mt-3">
            <strong>Prediction:</strong> {prediction}
          </div>
        )}
        {/* Login Button */}
        <button className="btn btn-outline-primary mt-4">Login to Save Predictions</button>
      </div>
    </main>
  );
}

export default Main;
