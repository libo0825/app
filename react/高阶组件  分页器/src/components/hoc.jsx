import React from 'react';

const Hoc = (ComponentNode) => {
    return class extends React.Component {
        constructor() {
            super()
            this.state={
                page:5,
                num:1,
                btn:[],
                data:[]
            }
        }

        render() {

            return (
                <div>
                    <ComponentNode data={this.state.data}></ComponentNode> 
                    <div>
                        <select
                            name=""
                            id=""
                            onChange={(e) => {
                            this.changePage(1,e.target.value*1)
                        }}>
                            <option >5</option>
                            <option >10</option>
                            <option >15</option>
                            <option >20</option>
                        </select>
                        {
                            this.state.btn.map((v,i)=>{
                                return <button key={i} onClick={()=>{
                                        this.changeList(v,this.state.page)
                                }}>{v}</button>
                            })
                        }
                    </div>
                </div>

            )
        }
        changePage(num,page){
            let newarr=this.props.data.slice(num-1,page)
            let count = Math.ceil(this.props.data.length/newarr.length)
            let newbtn=[]
            for(var i=1;i<=count;i++){
                newbtn.push(i)
            }
            this.setState({
                num:num,
                page:page,
                data:newarr,
                btn:newbtn
            })
        }
        changeList(num,page) {
           let start=(num-1)*page; // 0   5    10   15
           let end=page*num      //5   10   15   20
           let newarr=this.props.data.slice(start,end)
           this.setState({
            data:newarr
        })
        }
        componentDidMount(){
            this.changePage(1,this.state.page)
            
        }
    }
}

export default Hoc;