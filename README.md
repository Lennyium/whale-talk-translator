# 🐋 Whale Talk Translator

Turn ordinary English text into **whale talk** — a fun, vowel-focused language transformation inspired by Codecademy's Whale Talk exercise.

This project is written in vanilla JavaScript and makes a great beginner-friendly utility or code example for string manipulation and array handling.

---

## 📖 Overview

Whales don't speak like humans. They elongate their sounds, and when they do speak, it's usually **vowels** we hear. This program filters out all consonants and transforms the vowels into a form more suitable for our ocean-dwelling friends.

---

## ✨ Features

- Extracts all vowels from input text
- Doubles specific vowels (`e` and `u`) for extra flair
- Outputs result in **uppercase**
- Modular function design — easy to reuse
- Runs in Node.js or browser console

---

## 💡 How It Works

1. The input string is processed character-by-character.
2. Only vowels are selected: `a`, `e`, `i`, `o`, `u`.
3. Special rule:  
   - If the vowel is `e` or `u`, it's **added twice**.
4. All selected vowels are joined into one string and **converted to uppercase**.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/whale-talk-translator.git
cd whale-talk-translator
