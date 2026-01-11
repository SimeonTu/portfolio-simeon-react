import StartMenu from '../easter-eggs/StartMenu';

function Taskbar({ text = 'Welcome' }) {
  return (
    <div className="taskbar">
      <StartMenu />
      <div className="task">{text}</div>
    </div>
  );
}

export default Taskbar;
