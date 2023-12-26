-- CreateTable
CREATE TABLE "frontEnd" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "frontEnd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backend" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "backend_pkey" PRIMARY KEY ("id")
);
