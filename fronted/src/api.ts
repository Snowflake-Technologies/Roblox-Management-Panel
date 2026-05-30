const API_URL = "http://localhost:3001";

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
}

export async function getRobloxGroup(groupId: string) {
  const res = await fetch(`${API_URL}/roblox/group/${groupId}`);
  return res.json();
}

export async function getAnalytics(groupId: string) {
  const res = await fetch(`${API_URL}/analytics/${groupId}`);
  return res.json();
}
