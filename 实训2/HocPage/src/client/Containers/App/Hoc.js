import React from 'react';
import PropTypes from 'prop-types';

const Hoc = ( ComponentNode ) => {
    return class extends React.Component {
        constructor() {
            super()
        }
        handleCur(cur) {
            console.log(cur)
            this.props.getUpdateCur(cur, this.props.pageSize)
        }
        render () {
            const { currentPage, pageSize, total, data } = this.props
            return (
                <div>
                    < ComponentNode data={data}/>
                    {
                        Array.from({length: Math.ceil(total / pageSize)}, (item, key) => {
                            return <span key={key} onClick={() => {this.handleCur(key+1)}}>{`第${key + 1}页`}</span>
                        })
                    }
                    <select onChange={(e) => {
                        this.props.getUpdateCur(this.props.currentPage, e.target.value)
                    }}>
                        <option value={5}>5/页</option>
                        <option value={10}>10/页</option>
                        <option value={15}>15/页</option>
                        <option value={20}>20/页</option>
                    </select>
                </div>
 
            )
        }
    }
}

export default Hoc;