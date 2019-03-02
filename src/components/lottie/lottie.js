import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

export default class Lottie extends component {
    render () {
        return (
            <div>
                <LottieView
                    source={require('./animation.json')}
                    autoPlay
                    loop
                />
            </div>
        )
    }
}