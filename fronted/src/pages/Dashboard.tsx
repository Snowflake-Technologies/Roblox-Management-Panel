import { fetchGroup } from "../roblox";

export default function Dashboard({ user, logout, dark, setDark }: any) {
  return (
    <div className="container">
      <div className="sidebar">
        <h3>SnowPanel</h3>

        <p>Welcome {user.name}</p>

        <button onClick={() => setDark(!dark)}>
          Toggle Theme
        </button>

        <button onClick={logout}>Logout</button>
      </div>

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Dashboard</h1>

        <div className="card">
          📊 Player Analytics (coming from API)
        </div>

        <div className="card">
          📈 Revenue Tracking (Roblox API)
        </div>

        <div className="card">
          🤖 Discord Integration (placeholder)
        </div>
      </div>
    </div>
  );
}