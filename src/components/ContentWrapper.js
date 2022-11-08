import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import axios from 'axios';

class ContentWrapper extends React.Component {
    state = {
        products: [],
        categories: [],
        users: [],
        totalProducts: null,
        totalCategories: null,
        totalUsers: null
    }
    async componentDidMount() {
        const { data: productsResponse } = await axios.get('http://localhost:3000/api/product')
        const { data: usersResponse } = await axios.get('http://localhost:3000/api/user')
        this.setState({
            products: productsResponse.data,
            categories: productsResponse.categories,
            totalProducts: productsResponse.total,
            totalCategories: productsResponse.categories.length,
            users: usersResponse.data,
            totalUsers: usersResponse.total
        })
    }
    render() {
        return (
            <React.Fragment>
                {/*<!-- Content Wrapper -->*/}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/*<!-- Main Content -->*/}
                    <div id="content">
                        <TopBar />
                        <ContentRowTop
                            products={this.state.products}
                            totalProducts={this.state.totalProducts}
                            users={this.state.users}
                            totalUsers={this.state.totalUsers}
                            categories={this.state.categories}
                            totalCategories={this.state.totalCategories}
                        />
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ContentWrapper;