import usePageStore from "../store/slices/pageStore";

const Pagination = ({ products, onPageChange }) => {
    const { currentPage, setCurrentPage, productsPerPage } = usePageStore();
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const generatePageNumbers = () => {
        const pages = [];
        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage > totalPages - 3) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="pagination">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 border border-solid border-[#333]"
            >
                Prev
            </button>
            {pageNumbers.map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    disabled={page === currentPage}
                    className="p-2 border border-solid border-[#333]"
                >
                    {page}
                </button>
            ))}
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 border border-solid border-[#333]"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
