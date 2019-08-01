const User = require('../models/User');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    user: req.user
  });
};


/**
 * GET /
 * Profile page
 */
exports.getProfile = (req, res) => {
  phone = false;
  laptop = false;
  diary = false;
  folder = false;
  phoneTitle = "";
  phoneText = "";
  phoneUrl = "";
  laptopTo = "";
  laptopText = "";
  laptopSubject = "";
  laptopbiotab = "";
  laptop2biotitle = "";
  laptop2biotext = "";
  diaryTitle = "";
  diaryDate = "";
  diaryText = "";
  folderUrl = "";  

  if (!req.user) {
    res.render('account/login', {
      title: "Login",
    });
  }
  if (req.user.email == "Felicity Agatha") {
    phone = true;
    phoneTitle = "Voice Diary"
    phoneText = "<p>Wow... so much has happened this past week, it's too much to process. I feel like I really should follow my own advice and see a therapist.... but anyway, I guess I'll just keep recording all my <strong class='secret'>secret</strong> thoughts and feelings until I do.</p><p>I mean, this past week, I heard from my dad for the first time in a long time! There's a part of me that feels like I've been too harsh on him, but I still feel so angry. After what he did to mom... I mean, I can't believe he was cheating on her with that Rebecca woman ten years ago! And who knows for how long! Had I not found that letter she was writing him, he might even still be doing that now! </p><p>So I'm angry. But I also feel guilty.... I know he's getting old now, and he is my dad after all. Maybe it wasn't right of me to walk out the way I did, packing my bags for boarding school, and telling him I didn't want to see him ever again. Maybe I was just an impulsive fifteen year old... but maybe that was right? </p><p>I mean, based on his note to me, it does sound like he's changed, and maybe it's because of that! I mean, I didn't even know that he follows my Felicity X activism blog! Honestly, it's a little embarrassing, because sometimes I use it as an outlet of my anger toward him and write things critical about his company. Like the perverse incentive structures that his company employed to get providers to prescribe his drugs. Especially when we don't even fully know what those prescriptions do to patients in the long run. Or the fact that his fellowship for so long never selected a person of color, until Nora... feel like it's coming full circle that Nora is now running for a board position at the company.</p><p>But yeah, it's hard to balance writing very real things about my dad on an anonymous blog, and not being a little bit over the top because of all I feel about him.... but also just how defensive I feel when anyone else among my activist friends tries to say anything about him. Like, family is family after all. Although I guess they don't know that.</p><p>I don't know.... his letter was really thoughtful. I can't believe he said he'd been following my blog, and that it really made him rethink a lot of his life's work. He even said he's changed his will, to give more to charity, and to restructure some of the other things he's doing... and I guess most of all, he talked about how he really had to face his personal truths and apologize to mom, and how they've since worked on their marriage a lot.</p><p>He said he really wants me to be there at his retirement ceremony on Friday.... I don't know. I feel like I should go. Maybe it's time for our family to come back together.</p><p>But damn am I going to hate having to rub shoulders with all those bougie people. Everyone asking all those questions about my <strong class='secret'>background</strong>. Having to duck all those questions about my relationship with my dad. Although I guess a lot of these people probably get it, rich people with kids in boarding schools and all. I've always just talked about how I went to Phillips Exeter, and that kept me away from home, and then how I went to Williams and really focused on women's issues and racial justice, and how I write and help community organize now. All the rich people love to hear that! I never get a follow-up question. Guess it is cool though, that dad might actually be proud of that.</p>";
    phoneUrl = "path/to/file"
  }
  if (req.user.email == "David Erasmus") {
    laptop = true;
    laptopTo = "Myself";
    laptopText = "<p>Wow -- I can't believe he would do this. He always used to say how I'm like the son he never had, and how he was so proud of me... I can't believe he could just cut me out over email. Especially because he used to talk about his will, and how I should feel enabled to really pursue my dreams because of it, even if it meant taking on a low-paying job like a circuit justice. <span class='blinking-cursor'>|</span>And here I am, and now he suddenly decides to cut it in half without my counsel.</p><p>And not only that, he personally inherited so much from my parents! All the artwork, management of the trust fund, those antique horses I used to love.... like come on, this is so unfair.</p><p>Well -- I figure it's best to talk about it with him in person. I'll just plan on printing out a copy of the original will he wrote, and I'm sure when I lay it out in front of him, he'll realize that he's wrong.</p><br><strong>From:</strong> Christopher Agatha<br><<strong>To:</strong> David Erasmus<br><strong>Subject:</strong> Edits to my Will<br><br><br>Hi David,<br><p>Hope all is well! First, I'm excited to hear that you'll be able to take some time away from your busy schedule to attend my retirement celebration later this week. I am honored.</p><p>Second, I also had some news -- I've decided to make some edits to my will. There is a part that concerns you -- as you know, I previously planned on allocating 20% of my estates and assets to you. However, I am now planning on contributing much of that to charitable causes; instead, your share has dropped to 10%.</p><p>I hope you are not disappointed: 10% is still a lot of money, and I simply wanted to use more of the wealth I have been very fortunate to accumulate to directly support some causes I care about.</p><br><Let me know if you have any concerns.<br>Christopher";
    laptopSubject = "<strong class='secret'>Secret</strong> Personal Email Draft";
    laptopbiotab = "Federalist Society";
    laptop2biotitle = "<span>Federalist Society: SCOTUS Shortlist Candidate <strong class='secret'>Background</strong></span>";
    laptop2biotext = "<p>David Erasmus is a sharp, well-respected judge on the Second Circuit Court of Appeals. Appointed to the position six years ago, he should be viewed as a top conservative pick for the Supreme Court, should a vacancy occur.</p><p>He has a compelling biography. Son of Jacob and Nancy Erasmus (Nancy is the sister of billionaire Christopher Agatha), he lost his parents in a car crash as a teenager. From that point on, Agatha served as his legal guardian. However, Erasmus was mostly independent, and spent his time focused on his studies, excelling at Harvard during his undergraduate years, and again at Yale for law school.</p><p>On the bench, he is widely lauded even by his liberal colleagues for his conciliatory, genial personality. Despite his polish and pedigree, courtwatchers regularly describe his ability to connect with defendants and plaintiffs alike. A particular element of his folksy charm is that he is <strong class='secret'>never without his briefcase / backpack</strong>. He regularly regales people with stories about how it's the same backpack he's used since high school.</p><p>Erasmus is a consistent conservative. On social issues, he has pragmatically limited the government's intrusions into religious liberties and protected the ability of state legislatures to regulate abortion. On political issues, he is a rigorous textualist who has restricted over-regulation through ambiguous statutes. However, in some of the cases before the Second Circuit, Erasmus has displayed a slight antitrust streak.</p><p>We expect Erasmus to be a consensus nominee among Republicans, and someone who could garner support among moderate Democrats. We think he is well-qualified for the Supreme Court.</p>";;
  }
  if (req.user.email == "Elizabeth Balwani") {
    laptop = true;
    laptopTo = "Me";
    laptopText = "<p>Wow -- I can't believe he would do this. Especially after forty years of partnership! He was one of my best friends! Doesn't he know how much that hurt me, suddenly shutting himself off from the world all those years ago? And now reaching out of the blue, arrogantly assuming I'd want his endorsement... what a load of shit.</p><p> And it especially sucks because all the other investors will know that, by not endorsing me, he is explicitly endorsing the idea of someone else, given our longtime friendship. Surely he must know what the optics are like.</p><p> And also -- this Nora character! I can't stand impact investors who just think they can show up without knowing anything about the company, pushing their nonsense agenda. Like what does her platform even mean? And it's clear the investors backing her just want to bring the company down, and they're willing to bring in a popular girl like her, with her social media followers and all that, to use as a face.</p><p>Oh well -- I've never been someone who has been given anything in life. I've had to work for it. So I'm going to work for this too.<span class='blinking-cursor'>|</span></p><br><strong>From:</strong> Christopher Agatha<br><<strong>To:</strong> Elizabeth Balwani<br><strong>Subject:</strong>Board Position<br><br>Hi Elizabeth,<br><p>Hope all is well. I am sorry to be reaching out to you, out of the blue, like this. I know, as one of my closest friends, you must be upset that I suddenly stepped away ten years ago without much explanation -- I just genuinely had to do some soul-searching. I hope you accept my apology.<p></p>I also saw that you are running for my Board position! Best of luck. I did want to say, however, that I do not think I will be making a formal endorsement in the race. Truthfully, this is too difficult a decision for me; I have believed that we may benefit from a new perspective, but I also deeply respect all the work you've done for our company. <br><br>Hope you see you soon,<br>Christopher";
    laptopSubject = "<strong class='secret'>Secret</strong> Personal Email Draft";
    laptop2biotitle = "Agatha Pharmaceuticals Candidate <strong class='secret'>Backgrounds</strong>";
    laptopbiotab = "Agatha Pharmaceuticals";
    laptop2biotext = "<br><br><div class='bio-title'>Company shares breakdown:</div>$81.44 per share<br>Agatha: 25% voting shares<br>Balwani: 12% voting shares<br>Harris et al: 9% voting shares<br>Medici Hospital Group: 8% voting shares<br>Romney Capital: 6% voting shares<br>Weber Health investors: 3% voting shares<br>Other investors: 37% voting shares<br><br><p>Christopher Agatha is stepping down from his Board position in a few days. Due to the vacancy, we are soliciting applications for the Board. All candidates must be current shareholders, and will be voted on by the rest of the shareholders for the position.</p><br><div class='bio-title'>Elizabeth Balwani</div><p>Balwani is a candidate for the Board of Directors. As an original co-founder of the company back in 1970 and the current COO, Balwani has overseen much of the business operations over the past 40 years. She is an aggressive, ambitious leader; she is known to interrupt people while they are speaking to more quickly get to the point, and is effective at making deals.</p><p>She is planning on stepping down from her position as COO to transition into the Board role. Her platform as a candidate has a few major points:</p><p>1. She views her direct company experience as an asset</p><p>2. She argues that the company should aggressively transition to its new line of biomechanical engineering products, and that she will help the company find partnerships with major medical groups</p><p>3. For its existing suite of pharmaceutical drugs, she argues that the company should seek to change its pricing, and pursue higher profit margins particularly before the intellectual property expires</p><br><br><br><div class='bio-title'>Nora Harris</div><p>Harris is a candidate for the Board of Directors. Despite her youth, Harris has had a diverse career: she has been an Agatha Fellow, was a popular stand-up comedian with her own Netflix special, and is now an impact investor.</p><p>Harris is rambunctious and regularly challenges norms: for example, she is known for cutting her hair short and wearing a suit, to challenge notions around masculinity and femininity.</p><p>As an impact investor, Harris' platform is as follows:</p><p>1. She believes the company needs a fresh perspective</p><p>2. She thinks the company should be more transparent in its drug pricing, and clearly articulate for the public how prices are set (e.g. cost of manufacturing, total cost of research, profit margins, etc.)</p><p>3. She wants to make the company carbon-neutral by 2030.</p><p>4. She wants to re-examine the product design for many of the biomechanical products, namely how its data may impact patient privacy</p><br><p>Voting will occur at start of business on August 5.</p>";
  }
  if (req.user.email == "test@test.com") {
  	// laptop = true;
   //  laptopTo = "Me";
   //  laptopText = "Text";
   //  laptopSubject = "Personal Notes";

  	// phone = true;
  	// phoneTitle = "Voice Diary"
  	// phoneText = "Recorded on 1/1/1"
   //  phoneUrl = "path/to/file"

    // diary = true;
    // diaryTitle = "Note to Self";
    // diaryDate = "1/20/19"
    // diaryText = "Dear Diary,<br><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, </p>";

    folder = true;
    folderUrl = "/pdfs/christie_8_2.pdf";
  }
  res.render('profile', {
    title: 'My Profile',
    user: req.user, 
    phone: phone,
    phoneTitle: phoneTitle,
    phoneText: phoneText,
    phoneUrl: phoneUrl,
    laptop: laptop,
    laptopTo: laptopTo,
    laptopText: laptopText,
    laptopbiotab: laptopbiotab,
    laptopSubject: laptopSubject,
    laptop2biotitle: laptop2biotitle,
    laptop2biotext: laptop2biotext,
    diary: diary,
    diaryTitle: diaryTitle,
    diaryText: diaryText,
    diaryDate: diaryDate,
    folder: folder,
    folderUrl: folderUrl
  });
};
