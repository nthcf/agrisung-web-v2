export async function sendHookCreateLead(id: string) {
  await fetch(
    "https://hoacuongfarm.sg.larksuite.com/base/automation/webhook/event/Asc3awfvewPX4vhH8kglnmaVgXf",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    },
  );
}
