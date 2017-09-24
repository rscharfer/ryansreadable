const SET_SORT = "SET_SORT"

// can be sort by vote total or sort by date

export default function setSort(sort){

	return {

		type:SET_SORT,
		sort,
	}

}