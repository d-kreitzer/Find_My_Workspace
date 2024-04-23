CREATE TABLE [dbo].[Location] (
    [LocationID] INT            IDENTITY (1, 1) NOT NULL,
    [Name]       NVARCHAR (MAX) NOT NULL,
    [Address]    NVARCHAR (MAX) NOT NULL,
    [Type]       NVARCHAR (MAX) NOT NULL,
    [RatingAverage] FLOAT NOT NULL, 
    [City] NVARCHAR(MAX) NOT NULL, 
    CONSTRAINT [PK_Location] PRIMARY KEY CLUSTERED ([LocationID] ASC)
);

