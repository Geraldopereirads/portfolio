/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `backend` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `frontEnd` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `fullstack` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `wordpress` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "backend_title_key" ON "backend"("title");

-- CreateIndex
CREATE UNIQUE INDEX "frontEnd_title_key" ON "frontEnd"("title");

-- CreateIndex
CREATE UNIQUE INDEX "fullstack_title_key" ON "fullstack"("title");

-- CreateIndex
CREATE UNIQUE INDEX "projects_title_key" ON "projects"("title");

-- CreateIndex
CREATE UNIQUE INDEX "wordpress_title_key" ON "wordpress"("title");
