import React from 'react'
import styled from 'styled-components'

function SubNav() {
    return (
        <Nav>
            <div className='navbar'>
                <div className='subnav'>
                    <p>Editorial</p>
                    <p>Following</p>
                    <div>
                        <div className='line'>
                            <ul>
                                <li>CurrentEvents</li>
                                <li>Wallpapers</li>
                                <li>3DRenders</li>
                                <li>Textures&Patterns</li>
                                <li>Experimental</li>
                                <li>Architecture</li>
                                <li>Nature</li>
                                <li>Business&Work</li>
                            </ul>
                            </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </Nav>


    )
}

const Nav = styled.div`    
*{
    box-sizing: border-box;
}
top: 62px;
.navbar {
 padding-left: 20px;
 padding-right: 20px;
}

.subnav {
    align-items: center;
    display: flex;
    margin-bottom: 0;
    margin-left: calc(var(--subNavGutter)*-1);
}

p {
    margin-left: 10px;
    margin-right: 30px;
}

.line {
    background-color: #d1d1d1;
    height: 32px;
    width: 1px;
    margin-bottom: 8px;
}

ul {
    align-items: center;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    list-style: none;
}

li {
margin-left: 30px;
}

`;

export default SubNav
