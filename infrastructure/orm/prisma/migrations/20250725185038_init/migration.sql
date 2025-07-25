-- CreateTable
CREATE TABLE "CategorieTransaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "montant" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "categorieId" INTEGER NOT NULL,
    CONSTRAINT "Transaction_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieTransaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Compte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "montant" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Cryptomonnaie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ticker" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "quantite" REAL NOT NULL,
    "stacking" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Action" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ticker" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "quantite" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Sauvegarde" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "totalCompte" REAL NOT NULL,
    "totalCrypto" REAL NOT NULL,
    "totalBourse" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CategorieTransaction_nom_key" ON "CategorieTransaction"("nom");
