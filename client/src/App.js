import './App.css';
import CreateJobs from './components/CreateJobs';
import JobPage from './components/JobPage';

function App() {
  return (
    <div className="App">
      <JobPage />
      <div className="create-jobs">
        <CreateJobs />
      </div>
    </div>
  );
}

export default App;
