// Enum är en namngiven grupp av konstanter som består av key-value par...
// SupportStatus => SupportStatus.PENDING

// Exempel 1.
// const NEW = 'new'
// const PENDING = 'pending'
// const SOLVED = 'solved'
// const CLOSED = 'closed'

// let support = PENDING;
// support = SOLVED

// Exempel 2.
// Skapa en enum med nyckelorder enum...
// enum SupportStatus{
//   NEW,
//   PENDING,
//   SOLVED,
//   CLOSED
// }

// let supportStatus: SupportStatus = SupportStatus.NEW;
// supportStatus = SupportStatus.PENDING;
// supportStatus = SupportStatus.SOLVED;
// supportStatus = SupportStatus.CLOSED;

// Exempel 3.
// enum SupportStatus {
//   NEW = 10,
//   PENDING = 20,
//   SOLVED = 30,
//   CLOSED = 40,
// }

// let supportStatus: SupportStatus = SupportStatus.NEW;
// supportStatus = SupportStatus.PENDING;
// supportStatus = SupportStatus.SOLVED;
// supportStatus = SupportStatus.CLOSED;

// Exempel 4.
enum SupportStatus {
  NEW = 'new',
  PENDING = 'pending',
  SOLVED = 'solved',
  CLOSED = 'closed',
}

let supportStatus: SupportStatus = SupportStatus.NEW;
// supportStatus = SupportStatus.PENDING;
// supportStatus = SupportStatus.SOLVED;
// supportStatus = SupportStatus.CLOSED;

const isSolved = (status: SupportStatus): boolean => {
  return status === SupportStatus.SOLVED;
};

let areWeDoneYet: boolean = isSolved(SupportStatus.PENDING);
// returnerar false
// isSolved("DONE");

areWeDoneYet = isSolved(SupportStatus.SOLVED);
// returnerar true
