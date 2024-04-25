/*
  Warnings:

  - You are about to drop the column `image` on the `episode` table. All the data in the column will be lost.
  - Added the required column `videoPath` to the `Episode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `episode` DROP COLUMN `image`,
    ADD COLUMN `videoPath` VARCHAR(191) NOT NULL;
