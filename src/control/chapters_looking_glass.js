const createChapter = (title, chap, img, texts ) => ({ title, chap, img, texts  });

const chapters = {
    0: {
      title: "Through the Looking-Glass",
      year: "1871"
    },

    1: createChapter("Looking-Glass House", "I", "https://placehold.co/25", [
      {
        text: "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, ‘and what is the use of a book,’ thought Alice ‘without pictures or conversation?’",
        className: "chapter_text"
      },{
        text: "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
        className: "chapter_text"
      }
    ]),
    2: createChapter("The Garden of Live Flowers", "II", "https://placehold.co/25"),
    3: createChapter("Looking-Glass Insects", "III", "https://placehold.co/25"),
    4: createChapter("Tweedledum and Tweedledee", "IV", "https://placehold.co/25"),
    5: createChapter("Wool and Water", "V", "https://placehold.co/25"),
    6: createChapter("Humpty Dumpty", "VI", "https://placehold.co/25"),
    7: createChapter("The Lion and the Unicorn", "VII", "https://placehold.co/25"),
    8: createChapter("It's My Own Invention", "VIII", "https://placehold.co/25"),
    9: createChapter("Queen Alice", "IX", "https://placehold.co/25"),
    10: createChapter("Shaking", "X", "https://placehold.co/25"),
    11: createChapter("Waking", "XI", "https://placehold.co/25"),
    12: createChapter("Which Dreamed It?", "XII", "https://placehold.co/25")
}

export default chapters;