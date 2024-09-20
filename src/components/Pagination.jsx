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
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages
    }
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
