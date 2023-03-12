export interface HttpRespon<I> {
    currentPage: number;
    count: number;
    totalPages: number;
    totalCount: number;
    items: I;
  }