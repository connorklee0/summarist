export type BookStatus = "selected" | "recommended" | "suggested";

export interface Book {
  id: string;
  title: string;
  author: string;
}

const BASE_URL = "https://us-central1-summaristt.cloudfunctions.net";

export async function getBooks(status: BookStatus): Promise<Book[]> {
  try {
    const response = await fetch(`${BASE_URL}/getBooks?status=${status}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${status} books`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${status} books:`, error);
    throw error;
  }
}

export const getSelectedBook = () => getBooks("selected");
export const getRecommendedBooks = () => getBooks("recommended");
export const getSuggestedBooks = () => getBooks("suggested");

export async function getBookById(id: string) {
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch book");
  }

  return res.json();
}

export async function searchBooks(query: string) {
  if (!query.trim()) {
    return [];
  }

  try {
    const response = await fetch(
      `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${encodeURIComponent(
        query
      )}`,
      {
        next: { revalidate: 1000 },
      }
    );

    if (!response.ok) {
      throw new Error(`Search failed: ${response.status}`);
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error searching books:", error);
    throw error;
  }
}
