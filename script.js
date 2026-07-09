const quizData = [
    {
        pertanyaan: "Apa arti dari 'Etos Kerja' dalam pandangan Islam?",
        pilihan: [
            "A. Bekerja hanya untuk mencari kekayaan duniawi",
            "B. Sikap kepribadian yang melahirkan keyakinan mendalam bahwa bekerja adalah ibadah",
            "C. Bekerja keras jika dilihat oleh pimpinan atau orang lain",
            "D. Menghindari pekerjaan yang melelahkan fisik"
        ],
        jawaban: "B",
        edukasi: "Dalam Islam, etos kerja lahir dari keimanan bahwa kerja adalah bentuk ibadah kepada Allah SWT."
    },
    {
        pertanyaan: "Dalam QS. At-Taubah ayat 105, siapakah yang akan melihat amal dan pekerjaan kita?",
        pilihan: [
            "A. Allah, Rasul-Nya, dan orang-orang mukmin",
            "B. Malaikat dan seluruh umat manusia",
            "C. Pemimpin dunia dan keluarga",
            "D. Hanya diri kita sendiri"
        ],
        jawaban: "A",
        edukasi: "QS. At-Taubah: 105 menegaskan: '...Allah dan Rasul-Nya serta orang-orang mukmin akan melihat pekerjaanmu itu...'"
    },
    {
        pertanyaan: "Rasulullah SAW bersabda bahwa makanan yang paling baik dikonsumsi oleh seseorang adalah makanan yang berasal dari...",
        pilihan: [
            "A. Pemberian atau hadiah orang kaya",
            "B. Warisan orang tua",
            "C. Hasil usaha tangan sendiri",
            "D. Pinjaman tanpa riba"
        ],
        jawaban: "C",
        edukasi: "Hadits riwayat Bukhari menyebutkan tidak ada makanan yang lebih baik daripada hasil usaha tangan sendiri (kemandirian)."
    },
    {
        pertanyaan: "Manakah di bawah ini yang merupakan salah satu ciri etos kerja seorang Muslim yang tinggi?",
        pilihan: [
            "A. Menunda pekerjaan hingga mendekati tenggat waktu",
            "B. Memiliki sifat 'itqan' (profesional, tekun, dan teliti)",
            "C. Mengabaikan kualitas demi kuantitas",
            "D. Menghalalkan segala cara demi target kerja"
        ],
        jawaban: "B",
        edukasi: "Itqan berarti melakukan pekerjaan secara optimal, rapi, dan profesional sesuai ajaran Nabi SAW."
    },
    {
        pertanyaan: "Bekerja secara halal untuk menafkahi keluarga dikategorikan dalam Islam sebagai jihad di jalan Allah. Apa syarat utamanya?",
        pilihan: [
            "A. Niat yang ikhlas karena Allah SWT",
            "B. Keuntungan finansial yang besar",
            "C. Pengakuan dari masyarakat",
            "D. Mengorbankan waktu ibadah wajib"
        ],
        jawaban: "A",
        edukasi: "Niat (niyyah) yang lurus mengubah aktivitas duniawi seperti bekerja menjadi bernilai pahala akhirat."
    },
    {
        pertanyaan: "Apa dampak negatif dari sikap malas dan meminta-minta (mengemis) menurut hadits Nabi SAW?",
        pilihan: [
            "A. Mendapatkan simpati yang luas",
            "B. Menghapus dosa-dosa kecil",
            "C. Datang pada hari kiamat tanpa sekerat daging pun di wajahnya",
            "D. Mempercepat datangnya rezeki"
        ],
        jawaban: "C",
        edukasi: "Hadits Bukhari-Muslim melarang keras meminta-minta bagi yang mampu karena menjatuhkan kehormatan di dunia dan akhirat."
    },
    {
        pertanyaan: "Bagaimana cara menyeimbangkan antara etos kerja tinggi dan kewajiban ibadah ritual (seperti shalat)?",
        pilihan: [
            "A. Berhenti bekerja total ketika memasuki bulan Ramadhan",
            "B. Menunda shalat demi menyelesaikan rapat kerja",
            "C. Menjadikan waktu shalat sebagai jeda istirahat dan evaluasi diri",
            "D. Membayar fidyah sebagai pengganti shalat yang ditinggalkan karena sibuk"
        ],
        jawaban: "C",
        edukasi: "Muslim yang baik tidak memisahkan antara dunia dan akhirat (tawazun), kerja keras tetap berjalan tanpa melalaikan shalat."
    },
    {
        pertanyaan: "Sikap berserah diri kepada Allah setelah melakukan usaha secara maksimal dan optimal disebut...",
        pilihan: [
            "A. Ikhtiar",
            "B. Tawakal",
            "C. Qana'ah",
            "D. Syukur"
        ],
        jawaban: "B",
        edukasi: "Tawakal dilakukan setelah ikhtiar (usaha) maksimal, bukan sebelum atau tanpa usaha sama sekali."
    },
    {
        pertanyaan: "Perhatikan istilah berikut: (1) Jujur, (2) Amanah, (3) Boros, (4) Disiplin. Mana yang termasuk pilar etos kerja Islam?",
        pilihan: [
            "A. (1), (2), dan (3)",
            "B. (2), (3), dan (4)",
            "C. (1), (2), dan (4)",
            "D. Semua benar"
        ],
        jawaban: "C",
        edukasi: "Jujur, amanah (tanggung jawab), dan disiplin adalah pilar utama etos kerja Islam, sedangkan boros bertentangan dengan syariat."
    },
    {
        pertanyaan: "Mengaper konsep 'waktu' sangat krusial dalam etos kerja Islam sebagaimana diisyaratkan dalam QS. Al-'Asr?",
        pilihan: [
            "A. Karena waktu adalah uang (time is money)",
            "B. Karena manusia berada dalam kerugian jika tidak memanfaatkan waktu untuk iman dan amal saleh",
            "C. Waktu menentukan jumlah gaji yang diterima",
            "D. Agar manusia bisa tidur lebih lama"
        ],
        jawaban: "B",
        edukasi: "QS. Al-'Asr menegaskan bahwa demi masa/waktu, manusia merugi kecuali mereka yang beriman, beramal saleh, dan saling menasihati."
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Element Selectors
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const progressEl = document.getElementById('progress');
const scoreCounterEl = document.getElementById('score-counter');
const feedbackBox = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const educationText = document.getElementById('education-text');
const finalScoreEl = document.getElementById('final-score');
const resultMessageEl = document.getElementById('result-message');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreCounterEl.innerText = `Skor: ${score}`;
    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    progressEl.innerText = `Soal ${currentQuestionIndex + 1} dari ${quizData.length}`;
    questionEl.innerText = currentQuestion.pertanyaan;

    currentQuestion.pilihan.forEach(pilihan => {
        const button = document.createElement('button');
        button.innerText = pilihan;
        button.classList.add('option-btn');
        // Ambil huruf depan (A, B, C, atau D) untuk divalidasi
        const code = pilihan.charAt(0);
        button.dataset.code = code;
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    feedbackBox.classList.add('hide');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.dataset.code;
    const correctAnswer = quizData[currentQuestionIndex].jawaban;

    // Nonaktifkan semua tombol setelah memilih
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        feedbackText.innerHTML = "<b>✨ BENAR! ✨</b>";
        score++;
        scoreCounterEl.innerText = `Skor: ${score}`;
    } else {
        selectedButton.classList.add('wrong');
        feedbackText.innerHTML = `<b>❌ SALAH!</b> Jawaban yang benar adalah <b>${correctAnswer}</b>`;
        
        // Tandai tombol mana yang benar
        allButtons.forEach(btn => {
            if (btn.dataset.code === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    educationText.innerText = quizData[currentQuestionIndex].edukasi;
    feedbackBox.classList.remove('hide');
}

function showResults() {
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    finalScoreEl.innerText = score;

    const percentage = (score / quizData.length) * 100;
    if (percentage >= 80) {
        resultMessageEl.innerText = "Maa syaa Allah! Etos kerja dan pemahaman Anda sangat luar biasa! 🚀";
    } else if (percentage >= 60) {
        resultMessageEl.innerText = "Bagus! Tingkatkan lagi belajarnya agar lebih memahami konsep kerja dalam Islam. 📚";
    } else {
        resultMessageEl.innerText = "Jangan berkecil hati, mari baca kembali ayat dan hadits tentang etos kerja. 📖";
    }
}
