const SET_SORT = "SET_SORT"



export default function setSort(sort){

	// sort can be 'by vote total' or 'by date'

	return {

		type:SET_SORT,
		sort,
	}

}