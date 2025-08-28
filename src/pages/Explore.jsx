import React from "react";

export default function Explore() {
  return (
    <div style={container}>
      <h2>🌙 Islamic Inspiration</h2>
      <p>
        ﴿ إِنَّ الصَّلَاةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَٰبٗا مَّوْقُوتٗا ﴾  
        <br />
        <em>“Indeed, prayer has been decreed upon the believers a decree of specified times.” (Quran 4:103)</em>
      </p>
      <p>
        The Prophet ﷺ said:  
        <br />
        <em>“The most beloved of deeds to Allah are those that are most consistent, even if small.” (Bukhari & Muslim)</em>
      </p>
    </div>
  );
}

const container = { padding: "20px", textAlign: "center", maxWidth: "700px", margin: "auto" };
