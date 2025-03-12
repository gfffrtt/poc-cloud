-- 1741745589304_test

CREATE TABLE "posts" (
    "id" VARCHAR(36) PRIMARY KEY DEFAULT uuid_generate_v4(),
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL
)