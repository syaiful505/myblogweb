import React from 'react';
import { Left } from './Left';
import { Right } from './Right';

export function Main() {
    return (
        <div className="main-content">
            <div className="container">
                <div className="row">
                    <Left />
                    <Right />
                </div>
            </div>
        </div>
    )
}