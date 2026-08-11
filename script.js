const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const appointmentForm = document.querySelector("#appointment-form");
const formNote = document.querySelector("#form-note");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

if (appointmentForm) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(appointmentForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const medicalRecord = formData.get("medical_record") || "N/A";
    const date = formData.get("date");
    const time = formData.get("time");
    const reason = formData.get("reason");
    const department = formData.get("department");

    const subject = encodeURIComponent(`Appointment Request - ${name}`);
    const body = encodeURIComponent(
      [
        "Hello Metropolitan Family Hospital,",
        "",
        "I would like to book an appointment with the following details:",
        "",
        `Name: ${name}`,
        `Phone Number: ${phone}`,
        `Medical Record Number: ${medicalRecord}`,
        `Preferred Date: ${date}`,
        `Preferred Time: ${time}`,
        `Reason for Visit: ${reason}`,
        `Preferred Department: ${department}`,
        "",
        "Thank you.",
      ].join("\n"),
    );

    formNote.textContent = "Opening your email app with the appointment details...";
    window.location.href = `mailto:metrofamilyhospital@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ==========================================================================
   Black MD Media Hub & Blog Database / Interactivity
   ========================================================================== */

// Blog Articles Mock Database
const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Blood Pressure: The Silent Killer and How to Stop It",
    excerpt: "Hypertension doesn't always show symptoms until it's too late. Learn practical steps to monitor, control, and prevent high blood pressure through simple lifestyle changes.",
    category: "Prevention",
    author: "Dr. Chukwuma Okoli (Black MD)",
    date: "July 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>High blood pressure, or hypertension, is often called the "silent killer." This is because it can damage your blood vessels and heart for years without causing any obvious symptoms. If left unchecked, it can lead to devastating events like heart attacks, strokes, and kidney failure.</p>
      
      <h3>What is Blood Pressure?</h3>
      <p>Blood pressure is the force of your blood pushing against the walls of your arteries. Each time your heart beats, it pumps blood into the arteries. Your blood pressure is highest when your heart beats, pumping the blood. This is called systolic pressure. When your heart is at rest, between beats, your blood pressure falls. This is called diastolic pressure.</p>
      
      <blockquote>Normal blood pressure is generally defined as less than 120/80 mmHg. High blood pressure is typically defined as 130/80 mmHg or higher.</blockquote>

      <h3>Practical Steps to Control and Prevent High Blood Pressure</h3>
      <ul>
        <li><strong>Monitor Your BP Regularly:</strong> The only way to know if you have high blood pressure is to get it measured. Check it at a pharmacy or invest in a reliable home blood pressure monitor.</li>
        <li><strong>Reduce Sodium Intake:</strong> Eating too much salt causes the body to retain fluid, which increases blood pressure. Try to limit processed foods and avoid adding extra salt at the table.</li>
        <li><strong>Stay Active:</strong> Regular physical activity, such as 30 minutes of brisk walking most days of the week, helps strengthen your heart and lower blood pressure.</li>
        <li><strong>Manage Stress:</strong> Chronic stress can contribute to high blood pressure. Practices like meditation, deep breathing, and finding time for hobbies can make a significant difference.</li>
      </ul>

      <p>Taking care of your blood pressure is a lifelong commitment. Small, daily actions add up to massive protection for your cardiovascular health. Start today by knowing your numbers!</p>
    `
  },
  {
    id: 2,
    title: "Managing High Fever in Children: A Doctor's Guide for Parents",
    excerpt: "A child running a fever can be terrifying for any parent. Discover when a fever is dangerous, how to manage it safely at home, and paracetamol dosing guidelines.",
    category: "Family Health",
    author: "Dr. Chukwuma Okoli (Black MD)",
    date: "July 08, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Running a fever is one of the most common reasons parents seek medical care for their children. While it is natural to feel anxious when your child is hot and uncomfortable, it is important to remember that a fever is not an illness itself. Instead, it is a healthy sign that your child's immune system is active and fighting off an infection.</p>
      
      <h3>What is Considered a Fever?</h3>
      <p>A child has a fever if their body temperature is 38.0°C (100.4°F) or higher. The most accurate way to measure a child's temperature is with a digital thermometer.</p>

      <h3>When is a Fever an Emergency?</h3>
      <p>Seek immediate medical attention if your child has a fever and:</p>
      <ul>
        <li>Is under 3 months of age (any fever in a newborn requires emergency evaluation).</li>
        <li>Is extremely lethargic, difficult to wake up, or unresponsive.</li>
        <li>Has difficulty breathing, is breathing very rapidly, or has a stiff neck.</li>
        <li>Develops a new, unexplained rash that does not fade when pressed.</li>
        <li>Shows signs of dehydration (no wet diapers for over 8 hours, no tears when crying).</li>
        <li>Has a seizure (febrile seizure).</li>
      </ul>

      <h3>Safe Home Management Tips</h3>
      <ol>
        <li><strong>Keep Them Hydrated:</strong> Encourage your child to drink plenty of fluids. Water, diluted juice, breast milk, or oral rehydration solutions are excellent choices.</li>
        <li><strong>Dress Them Comfortably:</strong> Dress your child in a single layer of lightweight clothing. Avoid wrapping them in heavy blankets, which can trap heat and drive the temperature higher.</li>
        <li><strong>Medication Dosing:</strong> Paracetamol (acetaminophen) or ibuprofen can help lower a fever and make your child more comfortable. Always dose according to your child's current weight, not their age.</li>
        <li><strong>Lukewarm Baths:</strong> A lukewarm sponge bath can help cool a child down. Never use cold water, ice, or rubbing alcohol, as these can cause shivering, which actually raises internal body temperature.</li>
      </ol>

      <p>Fever is a normal part of growing up. By staying calm, monitoring your child closely, and knowing when to call us at Metropolitan Family Hospital, you can help them recover safely and quickly.</p>
    `
  },
  {
    id: 3,
    title: "5 Dietary Habits That Are Slowly Damaging Your Kidneys",
    excerpt: "Your kidneys filter waste and excess fluid from your blood. Are you putting them at risk? Here are 5 common eating habits that can cause kidney damage over time.",
    category: "Wellness",
    author: "Dr. Chukwuma Okoli (Black MD)",
    date: "July 01, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Your kidneys are remarkable organs that work tirelessly to filter waste, excess water, and impurities from your blood. They also help regulate blood pressure and red cell production. Because they are so efficient, you might not notice any symptoms of kidney strain until significant damage has already occurred. Protecting your kidneys starts in the kitchen.</p>

      <h3>5 Dangerous Habits to Avoid</h3>
      <ol>
        <li><strong>Overusing Painkillers:</strong> Over-the-counter pain medications like NSAIDs (ibuprofen, diclofenac) can reduce blood flow to the kidneys and cause direct tissue damage if taken frequently or in high doses.</li>
        <li><strong>Eating Too Much Processed Sodium:</strong> High-salt diets increase blood pressure, which is a leading cause of kidney disease. Watch out for hidden sodium in canned foods, instant noodles, and packaged snacks.</li>
        <li><strong>Not Drinking Enough Water:</strong> Staying hydrated helps your kidneys clear sodium and toxins from the body. Chronic dehydration increases the risk of kidney stones and infections. Aim for at least 2 to 3 liters of water daily.</li>
        <li><strong>Consuming Too Much Sugar:</strong> Excessive sugar intake contributes to obesity and diabetes, which are the primary causes of chronic kidney disease worldwide.</li>
        <li><strong>Excessive Animal Protein Consumption:</strong> High amounts of animal protein generate high acid levels in the blood, which can strain the kidneys as they work to filter acid.</li>
      </ol>

      <blockquote>A simple rule of thumb: If it's good for your heart and blood pressure, it's generally good for your kidneys. Keep your diet balanced and stay hydrated!</blockquote>
    `
  },
  {
    id: 4,
    title: "Recap: Sleep Hygiene and Mental Wellness on Solution 93.9 FM",
    excerpt: "Missed our Friday radio broadcast? Read this summary of Dr. Chucks Okoli's session on the critical link between sleep quality, immune health, and emotional stability.",
    category: "Radio Recaps",
    author: "Dr. Chukwuma Okoli (Black MD)",
    date: "June 26, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>On our latest broadcast of the <strong>Solution Health Talk</strong> on Solution 93.9 FM, Dr. Chucks Okoli focused on a topic that many of us neglect: sleep hygiene. In today's fast-paced environment, sleep is often viewed as a luxury. However, from a clinical perspective, sleep is a biological necessity crucial for both physical and mental wellness.</p>

      <h3>Why Sleep Matters for Your Mind and Body</h3>
      <p>During sleep, your brain consolidates memories, clears out cellular waste, and repairs neural connections. Depriving yourself of sleep triggers a stress response, releasing cortisol and adrenaline. This can lead to increased anxiety, mood swings, impaired decision-making, and weakened immune function.</p>

      <h3>Key Takeaways from the Broadcast</h3>
      <ul>
        <li><strong>Establish a Consistent Schedule:</strong> Go to bed and wake up at the same time every day, even on weekends. This strengthens your body's natural sleep-wake cycle (circadian rhythm).</li>
        <li><strong>Minimize Blue Light Exposure:</strong> The light emitted by smartphones, tablets, and TVs suppresses melatonin production, the hormone that makes you sleepy. Turn off screens at least one hour before bed.</li>
        <li><strong>Create a Restful Environment:</strong> Ensure your bedroom is cool, dark, and quiet. Use comfortable pillows and supportive mattresses.</li>
        <li><strong>Avoid Late Stimulants:</strong> Caffeine, heavy meals, and alcohol close to bedtime can disrupt your sleep cycle, preventing you from reaching the deep, restorative stages of rest.</li>
      </ul>

      <p>Our listeners phoned in with great questions about chronic insomnia and sleep aids. Dr. Okoli warned against self-medicating with sleeping pills and recommended addressing lifestyle factors first. If sleep issues persist, it is important to undergo a professional medical evaluation.</p>

      <blockquote>Join us next Friday at 9:00 AM on Solution 93.9 FM or stream live on Facebook for more health insights!</blockquote>
    `
  }
];

// Social Feeds Database
const SOCIAL_FEEDS = {
  youtube: [
    {
      title: "5 Habits Damaging Your Kidneys (What You Must Stop Today)",
      duration: "12:45",
      views: "15K views",
      time: "3 weeks ago",
      author: "Black MD Global®",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/3R-15-fN-G0",
      channelUrl: "https://youtube.com/@BlackMDGlobal"
    },
    {
      title: "Is Daily Paracetamol Dosing Safe? A Clinical Breakdown",
      duration: "8:20",
      views: "24K views",
      time: "1 month ago",
      author: "Black MD Global®",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/2_XvGf3aR8o",
      channelUrl: "https://youtube.com/@BlackMDGlobal"
    },
    {
      title: "Understanding Hypertension: High Blood Pressure Causes & Control",
      duration: "10:15",
      views: "9.2K views",
      time: "2 months ago",
      author: "Black MD Global®",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/t7B1A40k8vM",
      channelUrl: "https://youtube.com/@BlackMDGlobal"
    }
  ],
  tiktok: [
    {
      title: "Build your immunity the natural way! 💧 Listen to your body! #healthtips #blackmd #immunity",
      views: "120K views",
      likes: "12K likes",
      author: "@Black_md1",
      image: "https://i2.ytimg.com/vi/U38YewfJgjw/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/U38YewfJgjw",
      channelUrl: "https://tiktok.com/@Black_md1"
    },
    {
      title: "Eat fruits and do road walk: way to healthier life. 🙅‍♂️💊 #blackmd #healthyliving",
      views: "85K views",
      likes: "9.8K likes",
      author: "@Black_md1",
      image: "https://i1.ytimg.com/vi/lADPFcDC6KQ/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/lADPFcDC6KQ",
      channelUrl: "https://tiktok.com/@Black_md1"
    },
    {
      title: "You are what you eat! Pls watch . 🥗 #healthyliving #blackmd #nutrition",
      views: "95K views",
      likes: "14K likes",
      author: "@Black_md1",
      image: "https://i1.ytimg.com/vi/8V0MftQ7fZI/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/8V0MftQ7fZI",
      channelUrl: "https://tiktok.com/@Black_md1"
    }
  ],
  instagram: [
    {
      title: "Build your immunity the natural way! 👨‍👩‍👧‍👦 Here are my top rules for pediatric care at home...",
      views: "1.2K likes",
      likes: "48 comments",
      author: "@chukwumaokoli",
      image: "https://i2.ytimg.com/vi/U38YewfJgjw/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/U38YewfJgjw",
      channelUrl: "https://instagram.com/chukwumaokoli"
    },
    {
      title: "Eat fruits and do road walk: way to healthier life. 📻 Solution 93.9 FM live session.",
      views: "950 likes",
      likes: "32 comments",
      author: "@chukwumaokoli",
      image: "https://i1.ytimg.com/vi/lADPFcDC6KQ/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/lADPFcDC6KQ",
      channelUrl: "https://instagram.com/chukwumaokoli"
    },
    {
      title: "AUTISM WARNING SIGNS; THE parent’s checklist 🩺 #blackmd #pediatrics",
      views: "2.1K likes",
      likes: "64 comments",
      author: "@chukwumaokoli",
      image: "https://i1.ytimg.com/vi/pYaPJnBn62Q/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/pYaPJnBn62Q",
      channelUrl: "https://instagram.com/chukwumaokoli"
    }
  ],
  x: [
    {
      name: "BLACK MD",
      handle: "@ChukwumaOkoli",
      time: "Aug 9",
      text: "Build your immunity the natural way! #blackmd #health",
      retweets: "16",
      likes: "2",
      image: "assets/drokoli.jpg",
      videoThumb: "https://i2.ytimg.com/vi/U38YewfJgjw/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/U38YewfJgjw",
      url: "https://x.com/ChukwumaOkoli"
    },
    {
      name: "BLACK MD",
      handle: "@ChukwumaOkoli",
      time: "Aug 6",
      text: "Eat fruits and do road walk: way to healthier life. 🍎🏃‍♂️ #blackmd #healthyliving",
      retweets: "24",
      likes: "45",
      image: "assets/drokoli.jpg",
      videoThumb: "https://i1.ytimg.com/vi/lADPFcDC6KQ/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/lADPFcDC6KQ",
      url: "https://x.com/ChukwumaOkoli"
    },
    {
      name: "BLACK MD",
      handle: "@ChukwumaOkoli",
      time: "Aug 4",
      text: "You are what you eat! Pls watch and learn. 🥗 #healthyliving #blackmd #nutrition",
      retweets: "38",
      likes: "82",
      image: "assets/drokoli.jpg",
      videoThumb: "https://i1.ytimg.com/vi/8V0MftQ7fZI/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/8V0MftQ7fZI",
      url: "https://x.com/ChukwumaOkoli"
    },
    {
      name: "BLACK MD",
      handle: "@ChukwumaOkoli",
      time: "Jul 30",
      text: "HANTAVIRUS: The Beginning. Learn preventative steps and early warning signs. 🩺 #prevention #blackmd",
      retweets: "52",
      likes: "110",
      image: "assets/drokoli.jpg",
      videoThumb: "https://i1.ytimg.com/vi/hARbjZkl4Aw/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/hARbjZkl4Aw",
      url: "https://x.com/ChukwumaOkoli"
    }
  ]
};

// Update Weekly Radio Show Live Status
function updateRadioLiveStatus() {
  const radioBadge = document.getElementById("radio-live-badge");
  const radioText = document.getElementById("radio-live-text");
  if (!radioBadge || !radioText) return;
  
  const now = new Date();
  const isFriday = now.getDay() === 5;
  const hour = now.getHours();
  
  if (isFriday && hour === 9) {
    radioBadge.classList.add("is-live");
    radioText.textContent = "LIVE NOW";
  } else {
    radioBadge.classList.remove("is-live");
    radioText.textContent = "Every Friday 9AM";
  }
}

// Render Interactive Social Feed Channels
function renderSocialFeeds() {
  // YouTube Panel
  const ytFeatured = document.getElementById("youtube-featured-container");
  const ytContainer = document.getElementById("youtube-feed-container");
  
  if (SOCIAL_FEEDS.youtube && SOCIAL_FEEDS.youtube.length > 0) {
    if (ytFeatured) {
      const hero = SOCIAL_FEEDS.youtube[0];
      ytFeatured.innerHTML = `
        <div class="youtube-featured-video" onclick="playVideoModal('youtube', 0)" style="cursor: pointer;">
          <div class="yt-featured-thumbnail-wrapper">
            <img src="${hero.image}" alt="${hero.title}" />
            <div class="yt-play-btn-overlay">
              <div class="yt-play-icon"></div>
            </div>
            <div class="yt-duration-badge">${hero.duration}</div>
          </div>
          <div class="yt-featured-info">
            <span class="eyebrow">📢 Featured Video Tutorial</span>
            <h3>${hero.title}</h3>
            <p>
              Join Dr. Chukwuma Okoli (Black MD) in this comprehensive masterclass. Discover preventative healthcare standards and learn how to manage daily habits for long-term health.
            </p>
            <div class="yt-featured-meta">
              <span>⏱ ${hero.duration}</span>
              <span>👁 ${hero.views}</span>
              <span>📅 ${hero.time}</span>
            </div>
            <a href="javascript:void(0)" onclick="event.stopPropagation(); playVideoModal('youtube', 0)" class="yt-watch-btn">
              Watch on Website <span>▶</span>
            </a>
          </div>
        </div>
      `;
    }
    
    if (ytContainer) {
      const secondaryVideos = SOCIAL_FEEDS.youtube.slice(1);
      if (secondaryVideos.length > 0) {
        ytContainer.innerHTML = secondaryVideos.map((video, idx) => `
          <div class="feed-card" onclick="playVideoModal('youtube', ${idx + 1})">
            <div class="feed-card-visual">
              <img src="${video.image}" alt="${video.title}" />
              <div class="feed-card-overlay">
                <div class="play-btn-circle">▶</div>
              </div>
            </div>
            <div class="feed-card-body">
              <span class="feed-card-author">${video.author}</span>
              <h4 class="feed-card-title">${video.title}</h4>
              <div class="feed-card-meta">
                <span>⏱ ${video.duration}</span>
                <span>👁 ${video.views}</span>
              </div>
            </div>
          </div>
        `).join('');
      } else {
        ytContainer.innerHTML = `<p style="grid-column: 1/-1; color: #94a3b8; text-align: center; font-size: 0.95rem;">More educational videos coming soon.</p>`;
      }
    }
  }
  
  // TikTok Panel
  const ttContainer = document.getElementById("tiktok-feed-container");
  if (ttContainer) {
    ttContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    ttContainer.style.justifyItems = "stretch";
    ttContainer.innerHTML = SOCIAL_FEEDS.tiktok.map((video, idx) => `
      <div class="feed-card" onclick="playVideoModal('tiktok', ${idx})">
        <div class="feed-card-visual">
          <img src="${video.image}" alt="${video.title}" />
          <div class="feed-card-overlay">
            <div class="play-btn-circle">▶</div>
          </div>
        </div>
        <div class="feed-card-body">
          <span class="feed-card-author">${video.author}</span>
          <h4 class="feed-card-title">${video.title}</h4>
          <div class="feed-card-meta">
            <span>👁 ${video.views}</span>
            <span>♥ ${video.likes}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Instagram Panel
  const igContainer = document.getElementById("instagram-feed-container");
  if (igContainer) {
    igContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    igContainer.style.justifyItems = "stretch";
    igContainer.innerHTML = SOCIAL_FEEDS.instagram.map((post, idx) => `
      <div class="feed-card" onclick="playVideoModal('instagram', ${idx})">
        <div class="feed-card-visual">
          <img src="${post.image}" alt="${post.title}" />
          <div class="feed-card-overlay">
            <div class="play-btn-circle">📷</div>
          </div>
        </div>
        <div class="feed-card-body">
          <span class="feed-card-author">${post.author}</span>
          <h4 class="feed-card-title">${post.title}</h4>
          <div class="feed-card-meta">
            <span>♥ ${post.views}</span>
            <span>💬 ${post.likes}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // X Twitter Panel (Health Thoughts from @ChukwumaOkoli)
  const xContainer = document.getElementById("x-feed-container");
  if (xContainer) {
    xContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    xContainer.innerHTML = SOCIAL_FEEDS.x.map((tweet, idx) => `
      <div class="tweet-card" onclick="${tweet.embedUrl ? `playVideoModal('x', ${idx})` : `window.open('${tweet.url}', '_blank')`}" style="cursor: pointer;">
        <div class="tweet-header">
          <div class="tweet-author-info">
            <img src="${tweet.image}" alt="${tweet.name}" />
            <div class="tweet-name-handle">
              <strong>${tweet.name} <span style="color: #00d2ff;">✓</span></strong>
              <span>${tweet.handle} • ${tweet.time}</span>
            </div>
          </div>
          <span class="tweet-logo" style="font-size: 1.2rem; color: #00d2ff;">𝕏</span>
        </div>
        <p class="tweet-body" style="margin-bottom: 12px;">${tweet.text}</p>
        ${tweet.videoThumb ? `
          <div style="position: relative; width: 100%; height: 180px; border-radius: 12px; overflow: hidden; margin-bottom: 14px;">
            <img src="${tweet.videoThumb}" alt="Video thumbnail" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center;">
              <div style="width: 44px; height: 44px; background: rgba(0,210,255,0.9); border-radius: 50%; display: grid; place-items: center; color: #070b14; font-size: 1.1rem; font-weight: bold;">▶</div>
            </div>
          </div>
        ` : ''}
        <div class="tweet-footer-metrics">
          <span>💬 4</span>
          <span>🔁 ${tweet.retweets}</span>
          <span>♥ ${tweet.likes}</span>
        </div>
      </div>
    `).join('');
  }
}

// Render Homepage Blog Previews
function renderHomepageBlogPreviews() {
  const container = document.getElementById("homepage-blog-container");
  if (!container) return;
  
  const previewPosts = BLOG_POSTS.slice(0, 3);
  container.innerHTML = previewPosts.map(post => `
    <article class="blog-card" id="blog-card-${post.id}">
      <div class="blog-card-image">
        <img src="${post.image}" alt="${post.title}" />
        <span class="blog-category-tag">${post.category}</span>
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span>📅 ${post.date}</span>
          <span>⏱ ${post.readTime}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <a href="javascript:void(0)" onclick="openArticleModal(${post.id})" class="blog-read-link">
          Read Article <span>&rarr;</span>
        </a>
      </div>
    </article>
  `).join('');
}

// Interactive Feed Tab Switching Logic
function setupSocialTabs() {
  const tabs = document.querySelectorAll(".feed-tab");
  const panels = document.querySelectorAll(".feed-tab-content");
  if (tabs.length === 0) return;
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach(p => p.classList.remove("is-active"));
      
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      
      const panelId = tab.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add("is-active");
    });
  });
}

// Modal Article Reader Functionality
function openArticleModal(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;
  
  let modal = document.getElementById("article-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "article-modal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-container" id="modal-container">
        <div class="modal-progress-bar" id="modal-progress"></div>
        <button class="modal-close-btn" onclick="closeArticleModal()" aria-label="Close modal">&times;</button>
        <div class="modal-hero-image">
          <img id="modal-image" src="" alt="" />
        </div>
        <div class="modal-body">
          <div class="modal-meta-row">
            <span class="modal-meta-category" id="modal-category"></span>
            <span id="modal-date"></span>
            <span id="modal-read-time"></span>
          </div>
          <h2 id="modal-title"></h2>
          <div class="modal-article-text" id="modal-content"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal on background overlay click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeArticleModal();
      }
    });
    
    // Smooth reading progress calculation on scroll
    const container = modal.querySelector(".modal-container");
    container.addEventListener("scroll", () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      document.getElementById("modal-progress").style.width = `${progress}%`;
    });
  }
  
  // Load data to modal elements
  document.getElementById("modal-image").src = post.image;
  document.getElementById("modal-image").alt = post.title;
  document.getElementById("modal-category").textContent = post.category;
  document.getElementById("modal-date").textContent = `📅 ${post.date}`;
  document.getElementById("modal-read-time").textContent = `⏱ ${post.readTime}`;
  document.getElementById("modal-title").textContent = post.title;
  document.getElementById("modal-content").innerHTML = post.content;
  
  // Transition in
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeArticleModal() {
  const modal = document.getElementById("article-modal");
  if (modal) {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    document.getElementById("modal-progress").style.width = "0%";
  }
}

// Video Player Modal Lightbox Functionality
function playVideoModal(platform, index) {
  const videoData = SOCIAL_FEEDS[platform]?.[index];
  if (!videoData) return;
  
  let modal = document.getElementById("video-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "video-modal";
    modal.className = "video-modal-overlay";
    modal.innerHTML = `
      <div class="video-modal-container">
        <button class="video-modal-close-btn" onclick="closeVideoModal()" aria-label="Close video player">&times;</button>
        <div class="video-player-wrapper" id="video-wrapper">
          <!-- iframe or video elements injected here -->
        </div>
        <div class="video-modal-body">
          <h3 class="video-modal-title" id="video-title"></h3>
          <div class="video-modal-footer">
            <span style="color: #94a3b8; font-size: 0.9rem;" id="video-meta"></span>
            <a href="" target="_blank" rel="noopener" class="video-modal-channel-link" id="video-channel-btn">
              View on Channel &rarr;
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal on background overlay click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeVideoModal();
      }
    });
  }
  
  const wrapper = document.getElementById("video-wrapper");
  const title = document.getElementById("video-title");
  const meta = document.getElementById("video-meta");
  const channelBtn = document.getElementById("video-channel-btn");
  
  title.textContent = videoData.title;
  channelBtn.href = videoData.postUrl || videoData.channelUrl;
  
  // Set vertical aspect ratio styles if reels/tiktok
  if (platform === "tiktok" || platform === "instagram") {
    wrapper.classList.add("is-vertical");
    const targetEmbed = videoData.embedUrl || (platform === "instagram" ? "https://www.instagram.com/chukwumaokoli/embed" : null);
    if (targetEmbed) {
      wrapper.innerHTML = `
        <iframe src="${targetEmbed}" width="100%" height="520" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen style="border-radius: 16px; border: 0; background: #ffffff;"></iframe>
      `;
    } else {
      wrapper.innerHTML = `
        <video controls autoplay loop playsinline style="width:100%; height:100%; max-height:500px; border-radius:12px;">
          <source src="${videoData.videoUrl}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      `;
    }
    meta.textContent = `${videoData.author} • ${videoData.views} • ${videoData.likes || ''}`;
    channelBtn.innerHTML = `View on ${platform === 'tiktok' ? 'TikTok' : 'Instagram'} &rarr;`;
  } else {
    wrapper.classList.remove("is-vertical");
    wrapper.innerHTML = `
      <iframe src="${videoData.embedUrl}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen style="width:100%; height:100%; min-height:380px; border-radius:12px; border:0;"></iframe>
    `;
    meta.textContent = `${videoData.author} • ${videoData.views} • ${videoData.time}`;
    channelBtn.innerHTML = "View on YouTube Channel &rarr;";
  }
  
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  if (modal) {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    const wrapper = document.getElementById("video-wrapper");
    if (wrapper) wrapper.innerHTML = "";
  }
}

// Fetch Live YouTube Feed dynamically via Channel RSS
async function fetchLiveYouTubeFeed() {
  const channelId = "UCPNeuU4a54xNsfVqo07mxsw";
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data.status === "ok" && data.items && data.items.length > 0) {
      const liveVideos = data.items.map(item => {
        let videoId = "";
        if (item.guid && item.guid.includes("yt:video:")) {
          videoId = item.guid.replace("yt:video:", "");
        } else if (item.link) {
          const match = item.link.match(/(?:v=|\/shorts\/|\/embed\/)([a-zA-Z0-9_-]{11})/);
          if (match) videoId = match[1];
        }
        
        const isShort = item.link && item.link.includes("/shorts/");
        const pubDateObj = new Date(item.pubDate);
        const formattedDate = isNaN(pubDateObj.getTime()) ? "Recently" : pubDateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        
        return {
          title: item.title,
          duration: isShort ? "Short" : "Masterclass",
          views: "YouTube",
          time: formattedDate,
          author: item.author || "BLACK MD ®",
          image: item.thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${videoId}`,
          channelUrl: item.link || `https://www.youtube.com/channel/${channelId}`
        };
      });
      
      SOCIAL_FEEDS.youtube = liveVideos;
      renderSocialFeeds();
    }
  } catch (err) {
    console.warn("Using fallback YouTube video list.", err);
  }
}

// Global Event Listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeArticleModal();
    closeVideoModal();
  }
});

// Initialize elements on DOM load
document.addEventListener("DOMContentLoaded", () => {
  updateRadioLiveStatus();
  setInterval(updateRadioLiveStatus, 60000);
  renderSocialFeeds();
  fetchLiveYouTubeFeed();
  renderHomepageBlogPreviews();
  setupSocialTabs();
});
