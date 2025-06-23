import React, { useState } from 'react';

function Main() {
  const [input, setInput] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    const dummyResult = "Stock will rise 📈";
    setPrediction(dummyResult);
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className="mb-5 text-center">
        <h1 className="display-5 fw-bold">📈 Stock Predictor</h1>
        <p className="lead text-muted">
          Use AI-powered predictions to make smart investment decisions.
        </p>
      </header>

      {/* Main Prediction Section */}
      <section className="text-center mb-5">
        <h2 className="text-primary mb-4">Enter Stock Symbol</h2>
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
        <button className="btn btn-outline-primary mt-4">Login to Save Predictions</button>
      </section>

      {/* Footer Section */}
      <footer className="text-center pt-4 border-top">
        <p className="text-muted">&copy; 2025 Stock Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Main;
