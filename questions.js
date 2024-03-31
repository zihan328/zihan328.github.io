const questions = [
  {
    question: "1. 下面哪种食物是漫画《物理魔法使马修》中的马修最喜欢的食物？",
    options: ["A. 泡芙", "B. 牛角包", "C. 披萨", "D. 汉堡"],
    correctAnswer: "A. 泡芙"
  },
  {
    question: "2. 以下哪个角色的作战武器是镰刀？",
    options: ["A. 《BLOOD-C》的七原文人", "B. 《十二大战》的忧城", "C. 《不死不幸》的安迪", "D. 《杀戮天使》的扎克"],
    correctAnswer: "D. 《杀戮天使》的扎克"
  },
  {
    question: "3. 以下哪个角色的身份是学生？",
    options: ["A. 《崩坏：星穹铁道》的砂金", "B. 《蔚蓝档案》的伊草遥香", "C. 《白夜极光》的卡戎", "D. 《鸣潮》的维里纳"],
    correctAnswer: "B. 《蔚蓝档案》的伊草遥香"
  }
];

let currentQuestionIndex = 0;

function displayQuestion(index) {
  const questionContainer = document.getElementById('questions');
  const currentQuestion = questions[index];

  questionContainer.innerHTML = '';

  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.textContent = currentQuestion.question;

  questionContainer.appendChild(questionElement);

  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option;
    optionButton.classList.add('option');
    optionButton.addEventListener('click', function() {
      checkAnswer(option);
    });
    questionContainer.appendChild(optionButton);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    alert('答对啦！');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      alert('恭喜你都答对啦~~');
    }
  } else {
    alert('答错了哦，请再答一次！');
  }
}

const coverPage = document.getElementById('coverPage');
const questionsContainer = document.getElementById('questions');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', function() {
  coverPage.style.display = 'none';
  questionsContainer.style.display = 'block';
  displayQuestion(currentQuestionIndex);
});
