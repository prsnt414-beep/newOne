import { useState } from 'react';
import QuestionPage from './components/QuestionPage';
import YesPage from './components/YesPage';

function App() {
  const [showYesPage, setShowYesPage] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="hearts-background"></div>

      {!showYesPage ? (
        <QuestionPage onYes={() => setShowYesPage(true)} />
      ) : (
        <YesPage />
      )}
    </div>
  );
}

export default App;
