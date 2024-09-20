import { useFilterStore } from '../store';
import SortByFilter from './filters/SortByFilter';
import FilterTag from './FilterTag';

const Filters = () => {
    const {
        categories,
        colors,
        brands,
        selectedAttribute,
        setSelectedAttribute,
        removeCategory,
        removeColor,
        removeBrand
    } = useFilterStore();

    const showFilterTags = (items, removeFunction) => (
        items.map((item, index) => (
            <FilterTag
                key={index}
                label={item}
                onRemove={() => removeFunction(item)}
            />
        ))
    );

    return (
        <div className="flex items-center justify-between mt-4 w-full px-6">
            <div className='flex flex-wrap w-full px-4 gap-2 items-start justify-start'>
                {showFilterTags(categories, removeCategory)}
                {showFilterTags(colors, removeColor)}
                {showFilterTags(brands, removeBrand)}
            </div>

            <SortByFilter
                selectedAttribute={selectedAttribute}
                setSelectedAttribute={setSelectedAttribute}
            />
        </div>
    )
}

export default Filters;