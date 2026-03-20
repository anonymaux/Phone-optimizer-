function showInternet() {
  let box = document.getElementById("internetInfo");

  box.innerHTML = "⏳ Loading...";

  setTimeout(() => {
    box.innerHTML = `
    <h3>🌐 Internet Optimization</h3>
    <ul>
      <li>Turn airplane mode ON/OFF</li>
      <li>Change DNS</li>
      <li>Move closer to Wi-Fi</li>
    </ul>
    `;
  }, 1000);
}


function aiResponse() {
  let input = document.getElementById("aiInput").value.toLowerCase();
  let output = document.getElementById("aiOutput");

  output.innerHTML = "🤖 Analyzing your problem...";

  setTimeout(() => {

    if(input.includes("slow") || input.includes("lag")) {
      output.innerHTML = `
      🚀 <b>Problem:</b> Your phone is slow<br><br>
      📌 <b>Causes:</b>
      - Too many apps running
      - Cache overload<br><br>

      ✅ <b>Solutions:</b>
      - Restart your phone
      - Clear cache
      - Disable animations
      `;
    }

    else if(input.includes("storage") || input.includes("space")) {
      output.innerHTML = `
      📦 <b>Problem:</b> Storage almost full<br><br>

      📌 <b>Solutions:</b>
      - Delete large videos
      - Uninstall unused apps
      - Move files to SD card or cloud
      `;
    }

    else if(input.includes("ram") || input.includes("memory")) {
      output.innerHTML = `
      ⚡ <b>Problem:</b> RAM overloaded<br><br>

      ✅ <b>Solutions:</b>
      - Close background apps
      - Restart phone daily
      - Use lightweight apps
      `;
    }

    else if(input.includes("internet") || input.includes("wifi")) {
      output.innerHTML = `
      🌐 <b>Problem:</b> Slow internet<br><br>

      ✅ <b>Solutions:</b>
      - Turn airplane mode ON/OFF
      - Change DNS
      - Move closer to router
      `;
    }

    else if(input.includes("battery")) {
      output.innerHTML = `
      🔋 <b>Problem:</b> Battery draining fast<br><br>

      ✅ <b>Solutions:</b>
      - Reduce brightness
      - Disable background apps
      - Turn off location when not needed
      `;
    }

    else {
      output.innerHTML = `
      🤖 <b>General Advice:</b><br>
      - Keep your phone updated<br>
      - Clean storage regularly<br>
      - Restart your phone often
      `;
    }

  }, 1500);
}

  // scanPhone
  // getAdvice
  // 👉 aiResponse (ici)
