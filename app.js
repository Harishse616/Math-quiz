const patterns = [
    { id: 1, title: 'Radical factoring', short: 'Split the middle term with confidence.', icon: '√', accent: '#cfeee1', dark: '#3b8c72' },
    { id: 2, title: 'Reciprocal zeroes', short: 'Use the product of zeroes.', icon: '↔', accent: '#d9edff', dark: '#4a82ab' },
    { id: 3, title: 'Symmetric transformations', short: 'Turn α and β into useful sums.', icon: 'αβ', accent: '#e8e0ff', dark: '#7667a9' },
    { id: 4, title: 'Bi-quadratic zeroes', short: 'Spot the hidden quadratic.', icon: 'x⁴', accent: '#ffd978', dark: '#b78924' },
    { id: 5, title: 'Graphical zeroes', short: 'Read what the curve is telling you.', icon: '⌁', accent: '#f9d9d2', dark: '#c45f50' },
    { id: 6, title: 'Large linear systems', short: 'Add, subtract, and simplify.', icon: '＋', accent: '#cfeee1', dark: '#3b8c72' },
    { id: 7, title: 'Fixed + variable rates', short: 'Model charges with two equations.', icon: '₹', accent: '#d9edff', dark: '#4a82ab' },
    { id: 8, title: 'Time & work rates', short: 'Convert time into daily work.', icon: '◷', accent: '#e8e0ff', dark: '#7667a9' },
    { id: 9, title: 'Digit reversal', short: 'Let the digits do the talking.', icon: '↺', accent: '#ffd978', dark: '#b78924' },
    { id: 10, title: 'Fraction modification', short: 'Translate changes into equations.', icon: '⅓', accent: '#f9d9d2', dark: '#c45f50' },
    { id: 11, title: 'System consistency', short: 'Parallel, coincident, or unique?', icon: '∥', accent: '#cfeee1', dark: '#3b8c72' },
    { id: 12, title: 'Upstream / downstream', short: 'Balance boat speed and stream speed.', icon: '≋', accent: '#d9edff', dark: '#4a82ab' },
    { id: 13, title: 'Equal roots & D', short: 'Discriminant proofs made clear.', icon: 'Δ', accent: '#e8e0ff', dark: '#7667a9' },
    { id: 14, title: 'Age ratios', short: 'Build a timeline with algebra.', icon: '⌛', accent: '#ffd978', dark: '#b78924' }
];
const q = (text, answer, choices, hint, solution, level = 'Warm-up') => ({ text, answer, choices, hint, solution, level });
const banks = {
    1: [q('Find the zeroes of p(x) = 2x² + 3x + 1.', 'x = −1, −1/2', ['x = 1, 1/2', 'x = −1, −1/2', 'x = 2, 1', 'x = −2, −1'], 'Look for two numbers with product 2 and sum 3.', '2x² + 3x + 1 = (2x + 1)(x + 1). So x = −1, −1/2.'), q('Find the zeroes of p(x) = 3x² + 8x + 4.', 'x = −2, −2/3', ['x = 2, 2/3', 'x = −4, −1/3', 'x = −2, −2/3', 'x = 1, 4/3'], 'Split 8x into 6x + 2x.', '3x² + 8x + 4 = (3x + 2)(x + 2).'), q('For p(x) = 5x² + 14x + 8, the zeroes are:', 'x = −2, −4/5', ['x = −2, −4/5', 'x = 2, 4/5', 'x = −1, −8/5', 'x = 1, 8/5'], 'The factors of 40 that add to 14 are 10 and 4.', '5x² + 14x + 8 = (5x + 4)(x + 2).'), q('Which factorisation matches 2x² + 7x + 3?', '(2x + 1)(x + 3)', ['(2x + 3)(x + 1)', '(2x + 1)(x + 3)', '(x + 7)(2x + 3)', '(2x − 1)(x − 3)'], 'Check the constant terms multiply to 3.', 'Expand (2x + 1)(x + 3) to get 2x² + 7x + 3.'), q('Find the zeroes of x² + 5x + 6.', 'x = −2, −3', ['x = 2, 3', 'x = −1, −6', 'x = −2, −3', 'x = 1, 6'], 'Find two numbers with sum 5 and product 6.', 'x² + 5x + 6 = (x + 2)(x + 3).')],
    2: [q('If one zero is the reciprocal of the other, what is the product αβ?', '1', ['0', '−1', '1', '2'], 'Reciprocal means α · (1/α).', 'αβ = α · 1/α = 1.'), q('For p(x) = (k² + 4)x² + 10x + 4k, reciprocal zeroes require k =', '2', ['−2', '2', '4', '0'], 'Use product of zeroes c/a = 1.', '4k/(k² + 4) = 1 gives (k − 2)² = 0.'), q('For p(x) = (k² + 9)x² + 11x + 6k, find k.', '3', ['−3', '3', '6', '9'], 'Set the product c/a equal to 1.', '6k/(k² + 9) = 1, so (k − 3)² = 0.'), q('Which condition signals reciprocal zeroes?', 'c/a = 1', ['a/c = 1', 'c/a = 1', 'b/a = 1', 'b/c = 1'], 'The product of roots is c/a.', 'Reciprocal roots have product 1, so c/a = 1.'), q('For (k² + 25)x² + 10x + 10k, reciprocal zeroes give k =', '5', ['−5', '5', '10', '25'], 'Form a perfect square after setting c/a = 1.', '10k = k² + 25, hence (k − 5)² = 0.')],
    3: [q('If α + β = 5 and αβ = 2, find α² + β².', '21', ['23', '21', '25', '17'], 'Use α² + β² = (α + β)² − 2αβ.', '25 − 4 = 21.'), q('If α + β = 7 and αβ = 3, find α² + β².', '43', ['49', '40', '43', '37'], 'Square the sum, then subtract twice the product.', '49 − 6 = 43.'), q('If α − β = 1 and α + β = 5, find αβ.', '6', ['4', '5', '6', '7'], 'Use (α − β)² = (α + β)² − 4αβ.', '1 = 25 − 4αβ, so αβ = 6.'), q('For roots of x² − 9x + k, α² + β² = 71. Find k.', '5', ['4', '5', '9', '10'], 'Here α + β = 9 and αβ = k.', '81 − 2k = 71, so k = 5.'), q('If α + β = 3 and αβ = 1, find α³ + β³.', '18', ['9', '18', '27', '6'], 'Use (α + β)³ − 3αβ(α + β).', '27 − 9 = 18.')],
    4: [q('If two zeroes of x⁴ − 5x² + 4 are 1 and −1, the remaining zeroes are:', '2, −2', ['√2, −√2', '2, −2', '3, −3', '0, 4'], 'Let y = x².', '(x² − 1)(x² − 4) = 0, so the remaining roots are ±2.'), q('The zeroes of x⁴ − 7x² + 10 are:', '±√5, ±√2', ['±5, ±2', '±√5, ±√2', '±√7, ±√10', '1, −1, 2, −2'], 'Treat x² as one variable.', 'y² − 7y + 10 = (y − 5)(y − 2).'), q('A factor associated with zeroes 2 ± √3 is:', 'x² − 4x + 1', ['x² + 4x + 1', 'x² − 4x + 1', 'x² − 2x + 3', 'x² + 1'], 'Multiply (x − (2 + √3))(x − (2 − √3)).', '(x − 2)² − 3 = x² − 4x + 1.'), q('How many real zeroes does x⁴ − 4x² + 4 have?', 'Two distinct real zeroes', ['No real zeroes', 'Two distinct real zeroes', 'Four distinct real zeroes', 'One positive zero'], 'It is a perfect square in x².', '(x² − 2)² = 0, so x = ±√2.'), q('For x⁴ − 3x² + 2, the real zeroes are:', '±1, ±√2', ['±1, ±√2', '±2, ±3', '0, 1, 2, 3', '±√3, ±2'], 'Factor as a quadratic in x².', '(x² − 1)(x² − 2) = 0.')],
    5: [q('A parabola touches the x-axis at x = 2 and does not cross it. Its zeroes are:', '2, 2', ['−2, 2', '2, 2', '0, 2', 'No zeroes'], 'Touching means a repeated intercept.', 'The point of tangency is a double zero: x = 2, 2.'), q('A graph intersects the x-axis at −2, 1, and 4. Minimum degree?', '3', ['1', '2', '3', '4'], 'Each distinct crossing needs a root.', 'Three distinct zeroes require at least a cubic.'), q('A quadratic lies entirely above the x-axis. What is true?', 'No real zeroes and D < 0', ['Two real zeroes and D > 0', 'One zero and D = 0', 'No real zeroes and D < 0', 'D > 0 always'], 'It never meets the x-axis.', 'No x-intercepts means no real roots, hence D < 0.'), q('For y = −x² + 4, the width at ground level is:', '4 units', ['2 units', '4 units', '8 units', '0 units'], 'Set y = 0 and measure between roots.', '−x² + 4 = 0 gives x = ±2, so width = 4.'), q('A cubic can intersect the x-axis at most how many points?', '3', ['1', '2', '3', '4'], 'The maximum number of real zeroes is the degree.', 'A cubic has degree 3, so at most 3 intersections.')],
    6: [q('Solve: 100x + 200y = 300 and 200x + 100y = 300.', 'x = 1, y = 1', ['x = 2, y = 0', 'x = 1, y = 1', 'x = 3, y = 2', 'x = 0, y = 3'], 'Add and subtract the equations.', 'Adding gives x + y = 2; subtracting gives x − y = 0.'), q('For 101x + 201y = 604 and 201x + 101y = 604, x + y =', '4', ['2', '3', '4', '6'], 'Add the two equations first.', '302(x + y) = 1208, hence x + y = 4.'), q('If x + y = 6 and x − y = 2, then x is:', '4', ['2', '3', '4', '6'], 'Add the two short equations.', '2x = 8, so x = 4.'), q('For a symmetric system, adding equations isolates:', 'x + y', ['x − y', 'xy', 'x + y', 'x/y'], 'The coefficients swap places.', 'Adding makes the coefficients equal on x and y.'), q('Solve x + y = 8, x − y = −2.', 'x = 3, y = 5', ['x = 5, y = 3', 'x = 3, y = 5', 'x = 4, y = 4', 'x = 2, y = 6'], 'Add the equations to find x.', '2x = 6, so x = 3 and y = 5.')],
    7: [q('A taxi charges a fixed ₹20 plus ₹2 per km. Cost for 7 km?', '₹34', ['₹27', '₹34', '₹40', '₹54'], 'Use cost = fixed + rate × distance.', '20 + 2(7) = ₹34.'), q('For 3 km the cost is ₹26 and for 7 km it is ₹34. The rate per km is:', '₹2', ['₹1', '₹2', '₹3', '₹4'], 'Subtract the two equations.', '4y = 8, so y = ₹2 per km.'), q('If fixed charge x = ₹35 and rate y = ₹5, cost for 6 km is:', '₹65', ['₹40', '₹55', '₹65', '₹70'], 'Substitute distance into x + yd.', '35 + 5(6) = ₹65.'), q('In a fixed-plus-variable model, what does x represent?', 'Fixed charge', ['Distance', 'Fixed charge', 'Variable rate', 'Total time'], 'It stays the same for every trip.', 'x is the starting or fixed charge.'), q('What does a positive rate y mean?', 'Cost rises with distance', ['Cost falls with distance', 'Cost rises with distance', 'There is no fixed cost', 'The trip is free'], 'Think about the slope of the cost line.', 'A positive y makes the total increase as distance increases.')],
    8: [q('If one worker takes 12 days and another 36 days, their combined daily work is:', '1/9', ['1/48', '1/12', '1/9', '1/3'], 'Add work rates, not times.', '1/12 + 1/36 = 3/36 + 1/36 = 1/9.'), q('Two workers finish a task in 10 days. Daily rate of one worker, assuming equal rates?', '1/20', ['1/5', '1/10', '1/20', '20'], 'The pair completes 1/10 per day.', 'Half of 1/10 is 1/20.'), q('Why do we use 1/x for a completion time x?', 'It is the work rate', ['It is the cost', 'It is the work rate', 'It is the distance', 'It is the remainder'], 'Rate means work completed in one unit of time.', 'One whole job in x days means 1/x job per day.'), q('Three men each work at 1/18 and six women at 1/36. Combined time?', '3 days', ['2 days', '3 days', '6 days', '9 days'], 'Add 3/18 and 6/36.', '1/6 + 1/6 = 1/3 per day, so 3 days.'), q('Which equation models 2 workers and 5 assistants finishing in 4 days?', '2u + 5v = 1/4', ['2u + 5v = 4', '2u + 5v = 1/4', 'u + v = 4', '2u − 5v = 1/4'], 'Total work per day × days = 1.', 'Their combined rate is 1/4.')],
    9: [q('The sum of digits is 9. If the tens digit is double the units digit, the number is:', '63', ['36', '63', '54', '27'], 'Let tens = 2y and use x + y = 9.', '3y = 9, so x = 6 and y = 3.'), q('The sum of a two-digit number and its reverse is always divisible by:', '11', ['3', '9', '10', '11'], 'Add 10x + y and 10y + x.', 'The sum is 11(x + y).'), q('If a number is 10x + y, its reverse is:', '10y + x', ['10x − y', '10y + x', 'x + y', 'y − x'], 'Swap the place values.', 'The tens digit becomes y and units digit becomes x.'), q('A passcode plus 45 swaps its digits and the digit product is 14. The passcode is:', '27', ['14', '27', '72', '45'], 'Swapping gives y − x = 5.', 'Digits 2 and 7 have product 14 and differ by 5.'), q('The difference between 10x + y and 10y + x is:', '9(x − y)', ['11(x + y)', '9(x − y)', 'x − y', '10(x − y)'], 'Collect like terms.', '10x + y − 10y − x = 9x − 9y.')],
    10: [q('A fraction becomes 1/3 when 1 is subtracted from its numerator. The equation is:', '3x − y = 3', ['x − 3y = 1', '3x − y = 3', 'x + y = 3', '3x + y = 1'], 'Let the fraction be x/y.', '(x − 1)/y = 1/3 gives 3x − y = 3.'), q('A fraction becomes 1/4 when 8 is added to its denominator. The equation is:', '4x − y = 8', ['x − 4y = 8', '4x − y = 8', 'x + y = 8', '4x + y = 8'], 'Cross-multiply x/(y + 8) = 1/4.', '4x = y + 8, so 4x − y = 8.'), q('Solve x + y = 12 and (x + 3)/(y − 2) = 1. The sum x + y is:', '12', ['5', '10', '12', '14'], 'The first equation already states the sum.', 'The requested sum is directly given as 12.'), q('If x/y = 3/4, what is (x + 3)/(y − 2)?', '3', ['3/4', '5/6', '3', '7/8'], 'Use the representative values x = 3 and y = 4.', '(3 + 3)/(4 − 2) = 6/2 = 3.'), q('Adding the same positive c to numerator and denominator of a proper fraction makes it:', 'Larger', ['Smaller', 'Larger', 'Always equal', 'Zero'], 'Compare the two fractions by subtraction.', '(x + c)/(y + c) − x/y = c(y − x)/(y(y + c)) > 0.')],
    11: [q('For x + 2y = 3 and 5x + ky + 7 = 0 to be parallel, k is:', '10', ['2', '5', '10', '−10'], 'Parallel lines have equal coefficient ratios but different constants.', '5/1 = k/2, so k = 10.'), q('For 2x + 3y = 5 and 4x + ky = 10 to be coincident, k is:', '6', ['3', '4', '6', '8'], 'All three ratios must match.', '4/2 = k/3 = 10/5, hence k = 6.'), q('A system with a₁/a₂ = b₁/b₂ ≠ c₁/c₂ represents:', 'Parallel lines', ['Intersecting lines', 'Coincident lines', 'Parallel lines', 'The same point'], 'The coefficient ratios match but constants do not.', 'The lines are distinct and parallel, so there is no solution.'), q('A unique solution exists when:', 'a₁/a₂ ≠ b₁/b₂', ['All ratios are equal', 'a₁/a₂ ≠ b₁/b₂', 'c₁/c₂ = 0', 'a₁ = a₂ always'], 'Unique intersection means different slopes.', 'Different coefficient ratios mean the lines intersect once.'), q('For 3x + y = 1 and (2k − 1)x + (k − 1)y = 2k + 1, k = 3 gives:', 'A unique solution', ['No solution', 'Infinitely many', 'A unique solution', 'Only x = 0'], 'Compare the coefficient ratios at k = 3.', 'The ratios 3/5 and 1/2 differ, so the solution is unique.')],
    12: [q('A boat travels downstream at 20 km/h and upstream at 12 km/h. Speed in still water?', '16 km/h', ['4 km/h', '8 km/h', '16 km/h', '32 km/h'], 'Still-water speed is the average of downstream and upstream speeds.', '(20 + 12)/2 = 16 km/h.'), q('If boat speed is x and stream speed is y, upstream speed is:', 'x − y', ['x + y', 'x − y', 'y − x', 'xy'], 'The stream opposes upstream motion.', 'Upstream speed = boat speed − stream speed.'), q('A 54 km route with x = 20 and y = 2 takes what round-trip time?', '54/18 + 54/22 hours', ['54/20 hours', '54/18 + 54/22 hours', '54/2 hours', '108/20 hours'], 'Use upstream x − y and downstream x + y.', 'Time = 54/(20 − 2) + 54/(20 + 2).'), q('Downstream speed D and upstream speed U give stream speed y =', '(D − U)/2', ['D + U', '(D − U)/2', 'D − U', '2(D − U)'], 'Add and subtract x + y = D, x − y = U.', 'Subtract the second equation from the first: 2y = D − U.'), q('A boat covers 30 km downstream in 2 h and 18 km upstream in 3 h. Stream speed?', '4.5 km/h', ['4 km/h', '4.5 km/h', '6 km/h', '10.5 km/h'], 'Downstream = 15, upstream = 6.', 'x + y = 15 and x − y = 6; y = 4.5.')],
    13: [q('For ax² + bx + c = 0 to have equal roots, the discriminant is:', 'D = 0', ['D > 0', 'D = 0', 'D < 0', 'D = 1'], 'Equal roots meet at one point.', 'D = b² − 4ac = 0.'), q('The discriminant of x² + 2kx + k² is:', '0', ['k²', '2k', '0', '4k²'], 'Recognise a perfect square.', 'D = (2k)² − 4(k²) = 0.'), q('If roots of (k + 4)x² + (k + 1)x + 1 = 0 are equal, k can be:', '5 or −3', ['5 only', '−3 only', '5 or −3', '0'], 'Set D = 0 and factor the resulting quadratic.', '(k + 1)² − 4(k + 4) = k² − 2k − 15 = 0.'), q('For x² − 2px + (p² − q²) = 0, the discriminant is:', '4q²', ['4p²', '4q²', 'p² − q²', '0'], 'Expand b² − 4ac.', 'D = 4p² − 4(p² − q²) = 4q².'), q('If ad ≠ bc, x²(a² + b²) + 2x(ac + bd) + (c² + d²) = 0 has:', 'No real roots', ['Two real roots', 'One root', 'No real roots', 'Always equal roots'], 'Its discriminant becomes a negative square.', 'D = −4(ad − bc)² < 0.')],
    14: [q('Five years hence Jacob is 3 times his son. Five years ago he was 7 times his son. Present ages?', 'Jacob 40, son 10', ['Jacob 30, son 10', 'Jacob 40, son 10', 'Jacob 45, son 15', 'Jacob 35, son 5'], 'Let present ages be x and y.', 'x + 5 = 3(y + 5), x − 5 = 7(y − 5), giving x = 40, y = 10.'), q('A father was 12 times his son 10 years ago and twice as old 10 years hence. Present ages?', 'Father 34, son 12', ['Father 30, son 10', 'Father 34, son 12', 'Father 40, son 15', 'Father 24, son 8'], 'Write both age equations carefully.', 'x − 10 = 12(y − 10), x + 10 = 2(y + 10).'), q('A father is 3 years more than 3 times his son. In 3 years he is 10 more than twice his son. Ages?', 'Father 33, son 10', ['Father 30, son 9', 'Father 33, son 10', 'Father 36, son 11', 'Father 40, son 12'], 'Translate “3 years more” first.', 'x = 3y + 3 and x + 3 = 2(y + 3) + 10.'), q('A mother is 4 times her daughter. In 16 years she is twice as old. Present ages?', 'Mother 32, daughter 8', ['Mother 24, daughter 6', 'Mother 32, daughter 8', 'Mother 40, daughter 10', 'Mother 28, daughter 7'], 'Use m = 4d.', '4d + 16 = 2(d + 16), so d = 8 and m = 32.'), q('Mother + daughter = 45. Five years ago their product was 124. Present ages?', '36 and 9', ['30 and 15', '36 and 9', '40 and 5', '32 and 13'], 'Use y = 45 − x, then form a quadratic.', '(x − 5)(40 − x) = 124 gives x = 36 and y = 9.')]
};

const els = Object.fromEntries(['patternGrid', 'quickStart', 'viewPatterns', 'quizView', 'resultsView', 'quitQuiz', 'quizKicker', 'quizPatternName', 'timer', 'timerText', 'progressFill', 'questionProgress', 'questionNumber', 'difficulty', 'questionText', 'options', 'feedback', 'hintButton', 'nextButton', 'hintBox', 'scoreText', 'coachText', 'resultTitle', 'resultSubtitle', 'finalScore', 'accuracy', 'timeUsed', 'patternResult', 'retryQuiz', 'chooseAnother', 'reviewList', 'accountButton', 'accountGate', 'loginForm', 'studentName', 'accountModal', 'closeAccount', 'switchAccount', 'accountSummary', 'progressTitle', 'roundCount', 'overallAccuracy', 'questionsAnswered', 'strongestPattern', 'proficiencyList'].map(id => [id, document.getElementById(id)]));

// ---- Settings -------------------------------------------------------------
// A question that appeared in a round is "cooling down" for this many rounds.
// If every question of a pattern is cooling down, the least recently used ones
// are served anyway, so a student is never blocked. Raise this once banks grow.
const COOLDOWN_ROUNDS = 5;
const ROUND_SECONDS = 180;

let state = { pattern: null, bank: [], questions: [], index: 0, score: 0, answers: [], seconds: ROUND_SECONDS, timer: null, roundNumber: 0, finished: false };
const storageKey = 'mathQuestStudents';
const currentStudentKey = 'mathQuestCurrentStudent';

function readStudents() { try { return JSON.parse(localStorage.getItem(storageKey) || '{}') } catch (e) { return {} } }
function writeStudents(students) { localStorage.setItem(storageKey, JSON.stringify(students)) }
function blankStudent(name) { return { name, rounds: [], questionHistory: {}, patternStats: {} } }
function currentStudent() { const name = localStorage.getItem(currentStudentKey); return name ? readStudents()[name] || null : null }
function saveCurrentStudent(student) { const students = readStudents(); students[student.name] = student; writeStudents(students); localStorage.setItem(currentStudentKey, student.name) }

// The HTML uses class="hidden" with display:none !important, which inline styles cannot override.
// Removing the class first lets the inline display value take over.
function setView(element, visible, display = 'block') {
    element.classList.remove('hidden');
    element.style.display = visible ? display : 'none';
}

function questionId(patternId, index) { return `${patternId}-${index}` }

function availableQuestions(patternId, roundNumber) {
    const student = currentStudent();
    const all = banks[patternId].map((item, index) => ({ ...item, questionId: questionId(patternId, index) }));
    const fresh = all.filter(item => {
        const lastRound = student.questionHistory[item.questionId]?.lastRound;
        return !lastRound || roundNumber - lastRound >= COOLDOWN_ROUNDS;
    });
    if (fresh.length) return fresh;
    // Everything is cooling down: fall back to the least recently seen questions.
    return all.sort((a, b) => (student.questionHistory[a.questionId]?.lastRound || 0) - (student.questionHistory[b.questionId]?.lastRound || 0));
}

function showLibrary() {
    clearInterval(state.timer); // stop the clock when leaving a quiz
    setView(document.querySelector('main'), true);
    setView(els.quizView, false);
    setView(els.resultsView, false);
    renderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProgress() {
    const student = currentStudent();
    if (!student) return;
    const total = student.rounds.reduce((sum, round) => sum + round.total, 0);
    const correct = student.rounds.reduce((sum, round) => sum + round.score, 0);
    els.progressTitle.textContent = `${student.name}'s progress`;
    els.roundCount.textContent = `${student.rounds.length} round${student.rounds.length === 1 ? '' : 's'}`;
    els.overallAccuracy.textContent = `${total ? Math.round(correct / total * 100) : 0}%`;
    els.questionsAnswered.textContent = total;
    const ranked = patterns.map(pattern => ({ pattern, stats: student.patternStats[pattern.id] || { correct: 0, total: 0 } })).filter(item => item.stats.total).sort((a, b) => b.stats.correct / b.stats.total - a.stats.correct / a.stats.total);
    els.strongestPattern.textContent = ranked[0]?.pattern.title || '—';
    els.proficiencyList.innerHTML = patterns.map(pattern => {
        const stats = student.patternStats[pattern.id] || { correct: 0, total: 0 };
        const percent = stats.total ? Math.round(stats.correct / stats.total * 100) : 0;
        return `<div class="proficiency-row"><span class="proficiency-icon" style="--accent:${pattern.accent}">${pattern.icon}</span><span class="proficiency-name">${pattern.title}<small>${stats.total ? `${stats.total} answered` : 'Not started'}</small></span><span class="proficiency-meter"><i style="width:${percent}%;background:${pattern.dark}"></i></span><strong>${percent}%</strong></div>`;
    }).join('');
}

function enterStudent(name) {
    const cleanName = name.trim();
    if (!cleanName) return;
    const students = readStudents();
    const student = students[cleanName] || blankStudent(cleanName);
    saveCurrentStudent(student);
    setView(els.accountGate, false);
    setView(document.querySelector('main'), true);
    els.accountButton.textContent = cleanName;
    renderProgress();
}

function shuffle(items) { return [...items].sort(() => Math.random() - .5) }

function renderPatterns() {
    els.patternGrid.innerHTML = patterns.map(p => `<button class="pattern-card" data-id="${p.id}" style="--accent:${p.accent};--accent-dark:${p.dark}"><span class="pattern-number">${String(p.id).padStart(2, '0')}</span><span class="pattern-icon">${p.icon}</span><h3>${p.title}</h3><p>${p.short}</p></button>`).join('');
    document.querySelectorAll('.pattern-card').forEach(b => b.onclick = () => startQuiz(+b.dataset.id));
}

function startQuiz(id) {
    const student = currentStudent();
    if (!student) { setView(els.accountGate, true, 'grid'); return }
    const roundNumber = student.rounds.length + 1;
    const bank = availableQuestions(id, roundNumber);
    clearInterval(state.timer);
    state = { pattern: patterns.find(p => p.id === id), bank, questions: shuffle(bank), index: 0, score: 0, answers: [], seconds: ROUND_SECONDS, timer: null, roundNumber, finished: false };
    setView(document.querySelector('main'), false);
    setView(els.resultsView, false);
    setView(els.quizView, true, 'block');
    els.quizKicker.textContent = `Pattern ${String(id).padStart(2, '0')}`;
    els.quizPatternName.textContent = state.pattern.title;
    els.patternResult.textContent = state.pattern.title;
    renderQuestion();
    startTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startTimer() {
    clearInterval(state.timer);
    state.timer = setInterval(() => {
        state.seconds--;
        renderTimer();
        if (state.seconds <= 0) { clearInterval(state.timer); finishQuiz(true) }
    }, 1000);
    renderTimer();
}

// The progress bar shows how much of the 3 minutes has elapsed.
function renderTimer() {
    const m = Math.floor(state.seconds / 60), s = String(state.seconds % 60).padStart(2, '0');
    els.timerText.textContent = `${m}:${s}`;
    els.timer.classList.toggle('warning', state.seconds <= 30);
    els.progressFill.style.width = `${((ROUND_SECONDS - state.seconds) / ROUND_SECONDS) * 100}%`;
}

function renderQuestion() {
    const item = state.questions[state.index];
    els.questionNumber.textContent = `QUESTION ${String(state.index + 1).padStart(2, '0')}`;
    els.difficulty.textContent = item.level;
    els.questionText.textContent = item.text;
    els.questionProgress.textContent = `Question ${state.index + 1}`;
    els.options.innerHTML = shuffle(item.choices).map((choice, i) => `<button class="option" data-choice="${encodeURIComponent(choice)}"><span class="option-letter">${String.fromCharCode(65 + i)}</span>${choice}</button>`).join('');
    document.querySelectorAll('.option').forEach(b => b.onclick = () => chooseAnswer(decodeURIComponent(b.dataset.choice), b));
    els.feedback.hidden = true;
    els.hintBox.hidden = true;
    els.hintBox.textContent = item.hint;
    els.hintButton.textContent = '💡 Show hint';
    els.nextButton.disabled = true;
    els.nextButton.innerHTML = 'Next question <span>→</span>';
    els.coachText.textContent = state.index === 0 ? 'Look for the relationship hiding in the numbers before you calculate.' : 'Use the hint if you need a nudge, then explain the move to yourself.';
    els.scoreText.textContent = state.score;
}

function chooseAnswer(choice, button) {
    const item = state.questions[state.index];
    document.querySelectorAll('.option').forEach(b => b.disabled = true);
    const correct = choice === item.answer;
    if (correct) {
        state.score++;
        button.classList.add('correct');
        els.feedback.innerHTML = '<strong>Exactly!</strong> Your method is on point.';
    } else {
        button.classList.add('wrong');
        document.querySelectorAll('.option').forEach(b => { if (decodeURIComponent(b.dataset.choice) === item.answer) b.classList.add('correct') });
        els.feedback.innerHTML = `<strong>Good try.</strong> The correct answer is ${item.answer}. ${item.solution}`;
    }
    els.feedback.hidden = false;
    els.nextButton.disabled = false;
    els.scoreText.textContent = state.score;
    state.answers.push({ item, choice, correct });
}

els.hintButton.onclick = () => {
    els.hintBox.hidden = !els.hintBox.hidden;
    els.hintButton.textContent = els.hintBox.hidden ? '💡 Show hint' : '▴ Hide hint';
};

// The quiz only ends when the timer runs out. When the bank is used up,
// it is reshuffled and served again (never the same question twice in a row).
els.nextButton.onclick = () => {
    state.index++;
    if (state.index >= state.questions.length) {
        const cycle = shuffle(state.bank);
        const last = state.questions[state.questions.length - 1];
        if (cycle.length > 1 && cycle[0].questionId === last.questionId) cycle.push(cycle.shift());
        state.questions.push(...cycle);
    }
    renderQuestion();
};

function finishQuiz(timedOut) {
    if (state.finished) return; // guards against double-finishing
    state.finished = true;
    clearInterval(state.timer);
    const student = currentStudent();
    if (student) {
        const patternStats = student.patternStats[state.pattern.id] || { correct: 0, total: 0 };
        state.answers.forEach(result => {
            const item = result.item;
            const history = student.questionHistory[item.questionId] || { attempts: 0, correct: 0 };
            history.lastRound = state.roundNumber;
            history.attempts++;
            if (result.correct) { history.correct++; patternStats.correct++ }
            patternStats.total++;
            student.questionHistory[item.questionId] = history;
        });
        student.patternStats[state.pattern.id] = patternStats;
        student.rounds.push({ patternId: state.pattern.id, score: state.score, total: state.answers.length, accuracy: state.answers.length ? Math.round(state.score / state.answers.length * 100) : 0, at: new Date().toISOString() });
        saveCurrentStudent(student);
    }
    setView(els.quizView, false);
    setView(els.resultsView, true, 'block');
    els.finalScore.textContent = state.score;
    els.accuracy.textContent = `${state.answers.length ? Math.round(state.score / state.answers.length * 100) : 0}%`;
    const used = ROUND_SECONDS - state.seconds;
    els.timeUsed.textContent = `${Math.floor(used / 60)}:${String(used % 60).padStart(2, '0')}`;
    els.resultTitle.textContent = 'Time is up!';
    els.resultSubtitle.textContent = `You answered ${state.answers.length} question${state.answers.length === 1 ? '' : 's'} before the clock ended.`;
    els.reviewList.innerHTML = state.answers.map((a, i) => `<div class="review-item"><span class="review-status">${a.correct ? '✓' : '○'}</span><p><strong>Q${i + 1}.</strong> ${a.item.text}</p><small>${a.correct ? 'Correct' : 'Review'}</small></div>`).join('');
    renderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

renderPatterns();

els.loginForm.onsubmit = event => { event.preventDefault(); enterStudent(els.studentName.value) };

els.accountButton.onclick = () => {
    const student = currentStudent();
    if (!student) { setView(els.accountGate, true, 'grid'); return }
    els.accountSummary.textContent = `${student.name} has completed ${student.rounds.length} round${student.rounds.length === 1 ? '' : 's'} with ${student.rounds.reduce((sum, round) => sum + round.score, 0)} correct answers.`;
    els.accountModal.classList.remove('hidden');
};
els.closeAccount.onclick = () => els.accountModal.classList.add('hidden');

els.switchAccount.onclick = () => {
    clearInterval(state.timer);
    els.accountModal.classList.add('hidden');
    localStorage.removeItem(currentStudentKey);
    els.accountButton.textContent = 'Sign in';
    setView(document.querySelector('main'), false);
    setView(els.quizView, false);
    setView(els.resultsView, false);
    setView(els.accountGate, true, 'grid');
    els.studentName.value = '';
    els.studentName.focus();
};

els.quickStart.onclick = () => startQuiz(Math.ceil(Math.random() * patterns.length));
els.viewPatterns.onclick = () => document.getElementById('patterns').scrollIntoView({ behavior: 'smooth' });
els.quitQuiz.onclick = showLibrary;
els.chooseAnother.onclick = showLibrary;
els.retryQuiz.onclick = () => startQuiz(state.pattern.id);

const existingStudent = currentStudent();
if (existingStudent) {
    setView(els.accountGate, false);
    setView(document.querySelector('main'), true);
    els.accountButton.textContent = existingStudent.name;
    renderProgress();
} else {
    setView(els.quizView, false);
    setView(els.resultsView, false);
    setView(document.querySelector('main'), false);
    setView(els.accountGate, true, 'grid');
}