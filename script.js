const mazeCellRows = 18;
const mazeCellCols = 30;
const rows = mazeCellRows * 2 + 1;
const cols = mazeCellCols * 2 + 1;

const start = { row: rows - 1, col: 29 };
const startInner = { row: rows - 2, col: 29 };

const exits = {
  A: {
    row: 0,
    col: 49,
    inner: { row: 1, col: 49 },
    label: "Salida A",
    level: "Fácil",
    message: "Salida A: nivel fácil. Resultado: líder pésimo. Llegaste por la ruta más corta, con pocas decisiones."
  },
  B: {
    row: 27,
    col: cols - 1,
    inner: { row: 27, col: cols - 2 },
    label: "Salida B",
    level: "Medio",
    message: "Salida B: nivel medio. Resultado: líder medium. Tomaste mejores decisiones, pero todavía puedes mejorar."
  },
  C: {
    row: 3,
    col: 0,
    inner: { row: 3, col: 1 },
    label: "Salida C",
    level: "Difícil",
    message: "Salida C: nivel difícil. Resultado: líder responsable. Elegiste la ruta con más retos y mejores decisiones."
  }
};

const questionSets = {
  A: [
    {
      level: "A fácil",
      questions: [
        {
          text: "Un líder nota que su equipo está confundido. ¿Qué hace primero?",
          answers: [
            { text: "Escucha dudas y aclara prioridades.", correct: true },
            { text: "Culpa al equipo por no entender.", correct: false },
            { text: "Ignora el problema para avanzar rápido.", correct: false }
          ]
        },
        {
          text: "Si alguien del equipo se equivoca, ¿qué actitud muestra peor liderazgo?",
          answers: [
            { text: "Humillarlo frente a todos.", correct: true },
            { text: "Hablar con respeto y buscar solución.", correct: false },
            { text: "Revisar qué se puede aprender.", correct: false }
          ]
        }
      ]
    },
    {
      level: "A fácil",
      questions: [
        {
          text: "¿Qué decisión acerca más a una salida fácil pero poco responsable?",
          answers: [
            { text: "Elegir lo rápido sin pensar consecuencias.", correct: true },
            { text: "Consultar información importante.", correct: false },
            { text: "Organizar al equipo antes de actuar.", correct: false }
          ]
        },
        {
          text: "Cuando hay presión, un líder pésimo suele...",
          answers: [
            { text: "Decidir impulsivamente y no escuchar.", correct: true },
            { text: "Mantener la calma.", correct: false },
            { text: "Pedir apoyo cuando lo necesita.", correct: false }
          ]
        }
      ]
    }
  ],
  B: [
    {
      level: "B medio",
      questions: [
        {
          text: "Para tomar una decisión media, ¿qué es lo más útil?",
          answers: [
            { text: "Comparar opciones antes de elegir.", correct: true },
            { text: "Copiar lo que haga otra persona.", correct: false },
            { text: "Decidir sin revisar datos.", correct: false }
          ]
        },
        {
          text: "Si dos compañeros no están de acuerdo, ¿qué ayuda más?",
          answers: [
            { text: "Escuchar ambas partes.", correct: true },
            { text: "Elegir al más popular.", correct: false },
            { text: "Evitar el tema.", correct: false }
          ]
        }
      ]
    },
    {
      level: "B medio",
      questions: [
        {
          text: "Un líder medium mejora cuando...",
          answers: [
            { text: "Acepta retroalimentación y corrige.", correct: true },
            { text: "Nunca cambia su opinión.", correct: false },
            { text: "Hace todo solo.", correct: false }
          ]
        },
        {
          text: "¿Qué acción demuestra avance, aunque todavía no sea perfecta?",
          answers: [
            { text: "Delegar tareas según habilidades.", correct: true },
            { text: "Repartir tareas al azar.", correct: false },
            { text: "No explicar objetivos.", correct: false }
          ]
        }
      ]
    },
    {
      level: "B medio",
      questions: [
        {
          text: "Si una decisión afecta a todos, ¿qué debe cuidar el líder?",
          answers: [
            { text: "Comunicar razones y escuchar consecuencias.", correct: true },
            { text: "Decidir en secreto.", correct: false },
            { text: "Cambiar de plan sin avisar.", correct: false }
          ]
        },
        {
          text: "¿Qué convierte una idea en una decisión más sólida?",
          answers: [
            { text: "Revisar riesgos y beneficios.", correct: true },
            { text: "Usar solo la primera impresión.", correct: false },
            { text: "Evitar preguntas difíciles.", correct: false }
          ]
        }
      ]
    }
  ],
  C: [
    {
      level: "C difícil",
      questions: [
        {
          text: "Un líder responsable, antes de actuar, debe...",
          answers: [
            { text: "Pensar en el impacto para el equipo.", correct: true },
            { text: "Buscar quedar bien solamente.", correct: false },
            { text: "Dejar que otros carguen la culpa.", correct: false }
          ]
        },
        {
          text: "Cuando una decisión es difícil, ¿qué demuestra responsabilidad?",
          answers: [
            { text: "Asumir consecuencias y explicar el plan.", correct: true },
            { text: "Ocultar la información incómoda.", correct: false },
            { text: "Culpar al tiempo disponible.", correct: false }
          ]
        }
      ]
    },
    {
      level: "C difícil",
      questions: [
        {
          text: "Si el equipo falla en una meta, ¿qué hace un líder responsable?",
          answers: [
            { text: "Analiza causas y propone mejoras.", correct: true },
            { text: "Se lava las manos.", correct: false },
            { text: "Castiga sin escuchar.", correct: false }
          ]
        },
        {
          text: "¿Qué respuesta cuida mejor al equipo?",
          answers: [
            { text: "Reconocer errores y ajustar la estrategia.", correct: true },
            { text: "Fingir que nada pasó.", correct: false },
            { text: "Exigir más sin orientar.", correct: false }
          ]
        }
      ]
    },
    {
      level: "C difícil",
      questions: [
        {
          text: "¿Qué valor es clave para dirigir con responsabilidad?",
          answers: [
            { text: "Honestidad.", correct: true },
            { text: "Orgullo.", correct: false },
            { text: "Indiferencia.", correct: false }
          ]
        },
        {
          text: "Un líder responsable gana confianza cuando...",
          answers: [
            { text: "Cumple lo que promete.", correct: true },
            { text: "Promete sin revisar si puede cumplir.", correct: false },
            { text: "Cambia reglas a conveniencia.", correct: false }
          ]
        }
      ]
    },
    {
      level: "C difícil",
      questions: [
        {
          text: "¿Cuál es la mejor manera de cerrar una decisión importante?",
          answers: [
            { text: "Dar seguimiento y evaluar resultados.", correct: true },
            { text: "Olvidarse del tema al decidir.", correct: false },
            { text: "Esperar que todo salga solo.", correct: false }
          ]
        },
        {
          text: "¿Qué distingue al líder responsable en esta ruta?",
          answers: [
            { text: "Decide, responde y mejora con el equipo.", correct: true },
            { text: "Busca solo la salida más fácil.", correct: false },
            { text: "Evita hacerse cargo.", correct: false }
          ]
        }
      ]
    }
  ]
};

const maze = document.querySelector("#maze");
const movesCounter = document.querySelector("#moves");
const questionsCounter = document.querySelector("#questionsAnswered");
const wrongAnswersCounter = document.querySelector("#wrongAnswers");
const resetBtn = document.querySelector("#resetBtn");
const modal = document.querySelector("#questionModal");
const questionTitle = document.querySelector("#questionTitle");
const questionText = document.querySelector("#questionText");
const questionFeedback = document.querySelector("#questionFeedback");
const answerList = document.querySelector("#answerList");
const finishToast = document.querySelector("#finishToast");

let mazeMap = [];
let questionGates = [];
let player = { ...start };
let moves = 0;
let wrongAnswers = 0;
let answeredQuestions = new Set();
let questionAttempts = new Map();
let pendingMove = null;
let activeGate = null;
let gameFinished = false;

function generateMaze() {
  mazeMap = Array.from({ length: rows }, () => Array(cols).fill("#"));
  questionGates = [];

  buildTraditionalMaze();
  addMazeLoops();
  placeEntrancesAndExits();
  placeQuestionGates();
  closeQuestionBypasses();
}

function buildTraditionalMaze() {
  const visited = Array.from({ length: mazeCellRows }, () => Array(mazeCellCols).fill(false));
  const stack = [{ row: mazeCellRows - 1, col: 14 }];
  const random = seededRandom(35821);

  visited[mazeCellRows - 1][14] = true;
  carveLogicalCell(mazeCellRows - 1, 14);

  while (stack.length) {
    const current = stack[stack.length - 1];
    const neighbors = getUnvisitedNeighbors(current, visited);

    if (!neighbors.length) {
      stack.pop();
      continue;
    }

    const next = neighbors[Math.floor(random() * neighbors.length)];
    removeWallBetween(current, next);
    visited[next.row][next.col] = true;
    carveLogicalCell(next.row, next.col);
    stack.push(next);
  }
}

function getUnvisitedNeighbors(cell, visited) {
  const directions = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 }
  ];

  return directions
    .map((direction) => ({
      row: cell.row + direction.row,
      col: cell.col + direction.col
    }))
    .filter((next) => (
      next.row >= 0 &&
      next.row < mazeCellRows &&
      next.col >= 0 &&
      next.col < mazeCellCols &&
      !visited[next.row][next.col]
    ));
}

function carveLogicalCell(row, col) {
  mazeMap[row * 2 + 1][col * 2 + 1] = " ";
}

function removeWallBetween(from, to) {
  const fromCell = logicalToGrid(from);
  const toCell = logicalToGrid(to);

  mazeMap[(fromCell.row + toCell.row) / 2][(fromCell.col + toCell.col) / 2] = " ";
  mazeMap[toCell.row][toCell.col] = " ";
}

function addMazeLoops() {
  const random = seededRandom(91127);

  for (let row = 2; row < rows - 2; row++) {
    for (let col = 2; col < cols - 2; col++) {
      if (mazeMap[row][col] !== "#" || random() > 0.075) continue;

      const horizontalOpening = mazeMap[row][col - 1] === " " && mazeMap[row][col + 1] === " ";
      const verticalOpening = mazeMap[row - 1][col] === " " && mazeMap[row + 1][col] === " ";

      if (horizontalOpening || verticalOpening) {
        mazeMap[row][col] = " ";
      }
    }
  }
}

function logicalToGrid(cell) {
  return {
    row: cell.row * 2 + 1,
    col: cell.col * 2 + 1
  };
}

function placeEntrancesAndExits() {
  mazeMap[start.row][start.col] = "S";
  mazeMap[startInner.row][startInner.col] = " ";

  Object.entries(exits).forEach(([letter, exit]) => {
    mazeMap[exit.inner.row][exit.inner.col] = " ";
    mazeMap[exit.row][exit.col] = letter;
  });
}

function placeQuestionGates() {
  const used = new Set([getCellKey(start.row, start.col), getCellKey(startInner.row, startInner.col)]);
  const routeStops = {
    A: [0.34, 0.7],
    B: [0.25, 0.55, 0.82],
    C: [0.18, 0.4, 0.64, 0.86]
  };

  Object.entries(exits).forEach(([exitKey, exit]) => {
    const path = findPath(startInner, exit.inner);

    questionSets[exitKey].forEach((gateConfig, index) => {
      const pathIndex = Math.floor(path.length * routeStops[exitKey][index]);
      const position = findQuestionPosition(path, pathIndex, used);

      if (!position) return;

      const questionGate = {
        ...gateConfig,
        row: position.row,
        col: position.col
      };

      questionGates.push(questionGate);
      used.add(getCellKey(position.row, position.col));
      mazeMap[position.row][position.col] = "Q";
    });
  });
}

function findQuestionPosition(path, preferredIndex, used) {
  for (let offset = 0; offset < path.length; offset++) {
    const candidates = [
      path[preferredIndex + offset],
      path[preferredIndex - offset]
    ];

    const available = candidates.find((cell) => (
      cell &&
      mazeMap[cell.row][cell.col] === " " &&
      !used.has(getCellKey(cell.row, cell.col)) &&
      !isExitInnerCell(cell)
    ));

    if (available) return available;
  }

  return null;
}

function isExitInnerCell(cell) {
  return Object.values(exits).some((exit) => (
    exit.inner.row === cell.row && exit.inner.col === cell.col
  ));
}

function closeQuestionBypasses() {
  const protectedCells = getProtectedCells();

  for (let attempt = 0; attempt < 180; attempt++) {
    const bypass = Object.values(exits)
      .map((exit) => findPathAvoidingQuestions(startInner, exit.inner))
      .find((path) => path.length > 0);

    if (!bypass) break;

    const cellToClose = findSafeBypassCell(bypass, protectedCells);

    if (!cellToClose) break;

    mazeMap[cellToClose.row][cellToClose.col] = "#";
  }

  placeEntrancesAndExits();
  questionGates.forEach((gate) => {
    mazeMap[gate.row][gate.col] = "Q";
  });
}

function getProtectedCells() {
  const protectedCells = new Set([
    getCellKey(start.row, start.col),
    getCellKey(startInner.row, startInner.col)
  ]);

  Object.values(exits).forEach((exit) => {
    protectedCells.add(getCellKey(exit.row, exit.col));
    protectedCells.add(getCellKey(exit.inner.row, exit.inner.col));
  });

  questionGates.forEach((gate) => {
    protectedCells.add(getCellKey(gate.row, gate.col));
  });

  return protectedCells;
}

function findSafeBypassCell(path, protectedCells) {
  const middle = Math.floor(path.length / 2);
  const candidates = path
    .map((_, index) => {
      const forward = middle + index;
      const backward = middle - index;
      return [path[forward], path[backward]];
    })
    .flat()
    .filter(Boolean);

  return candidates.find((cell) => canCloseCell(cell, protectedCells));
}

function canCloseCell(cell, protectedCells) {
  const key = getCellKey(cell.row, cell.col);

  if (protectedCells.has(key) || mazeMap[cell.row][cell.col] !== " ") {
    return false;
  }

  mazeMap[cell.row][cell.col] = "#";
  const keepsAllExitsReachable = Object.values(exits).every((exit) => (
    findPath(startInner, exit.inner).length > 0
  ));
  mazeMap[cell.row][cell.col] = " ";

  return keepsAllExitsReachable;
}

function findPathAvoidingQuestions(from, to) {
  const questionCells = new Set(questionGates.map((gate) => getCellKey(gate.row, gate.col)));
  const queue = [{ ...from }];
  const visited = new Set([getCellKey(from.row, from.col)]);
  const previous = new Map();

  while (queue.length) {
    const current = queue.shift();

    if (current.row === to.row && current.col === to.col) {
      return buildPath(current, previous);
    }

    getOpenNeighbors(current).forEach((next) => {
      const key = getCellKey(next.row, next.col);

      if (visited.has(key) || questionCells.has(key)) return;

      visited.add(key);
      previous.set(key, current);
      queue.push(next);
    });
  }

  return [];
}

function findPath(from, to) {
  const queue = [{ ...from }];
  const visited = new Set([getCellKey(from.row, from.col)]);
  const previous = new Map();

  while (queue.length) {
    const current = queue.shift();

    if (current.row === to.row && current.col === to.col) {
      return buildPath(current, previous);
    }

    getOpenNeighbors(current).forEach((next) => {
      const key = getCellKey(next.row, next.col);

      if (visited.has(key)) return;

      visited.add(key);
      previous.set(key, current);
      queue.push(next);
    });
  }

  return [];
}

function buildPath(end, previous) {
  const path = [end];
  let current = end;

  while (previous.has(getCellKey(current.row, current.col))) {
    current = previous.get(getCellKey(current.row, current.col));
    path.unshift(current);
  }

  return path;
}

function getOpenNeighbors(cell) {
  return [
    { row: cell.row - 1, col: cell.col },
    { row: cell.row + 1, col: cell.col },
    { row: cell.row, col: cell.col - 1 },
    { row: cell.row, col: cell.col + 1 }
  ].filter((next) => {
    const nextCell = mazeMap[next.row]?.[next.col];
    return nextCell && nextCell !== "#";
  });
}

function seededRandom(seed) {
  let value = seed;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function drawMaze() {
  maze.innerHTML = "";
  maze.style.gridTemplateColumns = `repeat(${cols}, var(--cell))`;

  mazeMap.forEach((rowCells, row) => {
    rowCells.forEach((cellText, col) => {
      const cell = document.createElement("div");
      cell.className = getCellClass(cellText, row, col);

      if (player.row === row && player.col === col) {
        cell.classList.add("player");
      }

      maze.appendChild(cell);
    });
  });

  movesCounter.textContent = moves;
  questionsCounter.textContent = answeredQuestions.size;
  wrongAnswersCounter.textContent = wrongAnswers;
}

function getCellClass(cellText, row, col) {
  if (cellText === "#") return "cell wall";
  if (cellText === "S") return "cell start-cell";

  if (cellText === "Q") {
    const answered = answeredQuestions.has(getCellKey(row, col));
    return `cell question-cell${answered ? " answered" : ""}`;
  }

  if (cellText === "A") return "cell exit exit-a";
  if (cellText === "B") return "cell exit exit-b";
  if (cellText === "C") return "cell exit exit-c";

  return "cell path";
}

function movePlayer(direction) {
  if (gameFinished || modal.open) return;

  const next = { ...player };

  if (direction === "up") next.row -= 1;
  if (direction === "down") next.row += 1;
  if (direction === "left") next.col -= 1;
  if (direction === "right") next.col += 1;

  const nextCell = mazeMap[next.row]?.[next.col];

  if (!nextCell || nextCell === "#") return;

  if (nextCell === "Q" && !answeredQuestions.has(getCellKey(next.row, next.col))) {
    pendingMove = next;
    openQuestion(next.row, next.col);
    return;
  }

  completeMove(next, nextCell);
}

function completeMove(next, cellType) {
  player = next;
  moves++;
  drawMaze();

  if (["A", "B", "C"].includes(cellType)) {
    finishGame(cellType);
  }
}

function openQuestion(row, col) {
  const questionKey = getCellKey(row, col);
  const gate = questionGates.find((item) => item.row === row && item.col === col);

  if (!gate) return;

  activeGate = gate;
  renderQuestion(gate, questionKey, "");
  modal.showModal();
}

function renderQuestion(gate, questionKey, feedback) {
  const attempt = questionAttempts.get(questionKey) || 0;
  const question = gate.questions[attempt % gate.questions.length];

  questionTitle.textContent = `${gate.level} - decisión ${attempt + 1}`;
  questionText.textContent = question.text;
  questionFeedback.textContent = feedback;
  questionFeedback.classList.toggle("is-error", Boolean(feedback));
  answerList.innerHTML = "";

  shuffleAnswers(question.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer.text;

    button.addEventListener("click", () => {
      handleAnswer(questionKey, answer.correct);
    });

    answerList.appendChild(button);
  });
}

function shuffleAnswers(answers) {
  return [...answers].sort(() => Math.random() - 0.5);
}

function handleAnswer(questionKey, isCorrect) {
  if (!activeGate || !pendingMove) return;

  if (!isCorrect) {
    wrongAnswers++;
    questionAttempts.set(questionKey, (questionAttempts.get(questionKey) || 0) + 1);
    renderQuestion(activeGate, questionKey, "Respuesta incorrecta. Intenta con una pregunta diferente para poder pasar.");
    drawMaze();
    return;
  }

  answeredQuestions.add(questionKey);
  questionAttempts.delete(questionKey);
  modal.close();

  const next = pendingMove;
  pendingMove = null;
  activeGate = null;
  completeMove(next, mazeMap[next.row][next.col]);
}

function finishGame(exitKey) {
  gameFinished = true;
  finishToast.textContent = exits[exitKey].message;
  finishToast.classList.add("show");
}

function resetGame() {
  player = { ...start };
  moves = 0;
  wrongAnswers = 0;
  answeredQuestions = new Set();
  questionAttempts = new Map();
  pendingMove = null;
  activeGate = null;
  gameFinished = false;
  finishToast.classList.remove("show");

  if (modal.open) {
    modal.close();
  }

  drawMaze();
}

function getCellKey(row, col) {
  return `${row}-${col}`;
}

modal.addEventListener("cancel", (event) => {
  event.preventDefault();
});

document.addEventListener("keydown", (event) => {
  const keys = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    w: "up",
    s: "down",
    a: "left",
    d: "right",
    W: "up",
    S: "down",
    A: "left",
    D: "right"
  };

  const direction = keys[event.key];

  if (!direction) return;

  event.preventDefault();
  movePlayer(direction);
});

document.querySelectorAll("[data-move]").forEach((button) => {
  button.addEventListener("click", () => movePlayer(button.dataset.move));
});

resetBtn.addEventListener("click", resetGame);

generateMaze();
drawMaze();
