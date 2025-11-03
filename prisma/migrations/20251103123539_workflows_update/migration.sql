/*
  Warnings:

  - Added the required column `updatedAt` to the `Workflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Workflow] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [Workflow_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[updatedAt] DATETIME2 NOT NULL,
[userId] NVARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Workflow] ADD CONSTRAINT [Workflow_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[user]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
