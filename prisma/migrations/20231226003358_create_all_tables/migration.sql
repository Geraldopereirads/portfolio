-- CreateTable
CREATE TABLE "fullstack" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "fullstack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wordpress" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "wordpress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
