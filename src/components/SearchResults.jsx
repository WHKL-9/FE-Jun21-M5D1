import { connect } from "react-redux"

const mapStateToProps = (state) => ({
results: state.search.results.data
})


const SearchResults = ({results}) => {
    return (
        <>
        {results && results.slice(0,5).map((result)=>(
            <p>{result.title}</p>
        ))}
        </>
    )
}

export default connect(mapStateToProps)(SearchResults)