"use client"
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { ChevronDoubleDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
export interface MainNav2LoggedProps { }
interface MenuItem {
    name: string;
    logo: string;
    leftSide: { name: string }[];
    rightSide: { name: string; content: { name: string }[] }[];
}
const MobileNavbarMega: FC<MainNav2LoggedProps> = () => {
    const [hoverIndex, setHoverIndex] = useState<string | null>(null);;
    const [selectedLeftSideItem, setSelectedLeftSideItem] = useState<string | null>(null);;

    const DropdownMenu: FC<{ item: MenuItem }> = ({ item }) => (
        <div className={`w-full flex  transition-all duration-200  right-0 inset-0 z-[99] shadow-lg transform ${item ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div
                className={`flex flex-col w-full gap-8 bg-gray-50 h-fit  rounded shadow p-5 `}
                style={{ background: "", color: "white", zIndex: 9999 }}
            >
                <div className='flex flex-col gap-5 w-[300px] border-white'>
                    {item.leftSide.map((ite: any, i: any) => (
                        <div
                            key={i}
                            className='px-2 text-sm flex justify-between items-center text-gray-700 hover:text-blue-300 cursor-pointer'

                        >
                            <div className='font-bold' onClick={() => setSelectedLeftSideItem(ite.name)} >{ite.name}</div>
                            {selectedLeftSideItem ? <ChevronDownIcon className="w-4 h-4 ml-3 cursor-pointer" onClick={() => setSelectedLeftSideItem(item.name)} /> : <ChevronUpIcon className="w-4 h-4 ml-3 cursor-pointer" onClick={() => setSelectedLeftSideItem(null)} />}


                        </div>
                    ))}
                </div>
                {selectedLeftSideItem && (
                    <div className='flex-1 flex w-full flex-wrap gap-5'>
                        {item.rightSide.map((category: any, i: any) => (
                            category.name === selectedLeftSideItem && (
                                <div key={i} className='px-2 w-full text-sm text-gray-700'>
                                    <div className='font-semibold mb-4 text-xl hover:text-blue-300'>{category.name}</div>
                                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                                        {category.content.map((ite: any, it: any) => (
                                            <div key={it} className='hover:text-blue-300'>{ite.name}</div>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            <div className={`nc-MainNav2Logged relative z-9`}>
                <div className="container">
                    <div className="flex justify-center ">
                        <div className="flex-shrink-0 relative flex items-center w-full justify-between text-neutral-700 dark:text-neutral-100 ">
                            <div className="w-full flex flex-col  py-6 px-2 space-y-1">
                                {MegaMenu.map((item, index) => (
                                    <div
                                        className="h-auto w-full  inline-flex flex-col items-center justify-between rounded gap-2  py-1.5 text-sm font-medium cursor-pointer bg-white hover:bg-primary-100 text-gray-600 self-center group"
                                        key={index}
                                    // onClick={() => setHoverIndex(item.name)}
                                    // onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        <div className='flex w-full justify-between'>
                                            <div onClick={() => setHoverIndex(item.name)} className="rounded gap-2 px-3 flex items-center py-1.5 text-sm font-medium cursor-pointer text-gray-600 self-center">
                                                <img src={item.logo} alt="menu" className="h-5 w-5" />
                                                {item.name}
                                            </div>
                                            {hoverIndex !== item.name ? <ChevronDownIcon className="w-4 h-4 ml-3 cursor-pointer" onClick={() => setHoverIndex(item.name)} /> : <ChevronUpIcon className="w-4 h-4 ml-3 cursor-pointer" onClick={() => setHoverIndex(null)} />}
                                        </div> {hoverIndex === item.name &&
                                            <DropdownMenu item={item} />
                                        }
                                        {/* <DropdownMenu item={item} /> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavbarMega;





const MegaMenu = [
    {
        "name": "AI Models",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" }
        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
    {
        "name": "AI Category",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" }
        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
    {
        "name": "Use Case",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" }
        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
    {
        "name": "Use Case",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" }
        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
    {
        "name": "Use Case1",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" }
        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
    {
        "name": "Productivity",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" }
        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
    {
        "name": "Gallery",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" },

        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
    {
        "name": "Gallery1",
        "link": "",
        "logo": "https://promptbase.com/assets/icons/3d_outline.svg",
        "leftSide": [
            { "name": "Language Models", "heading": "NLP and Language Understanding" },
            { "name": "Vision Models", "heading": "Image Recognition and Processing" },
            { "name": "Generative Models", "heading": "Content Generation" },
            { "name": "Predictive Models", "heading": "Forecasting and Predictions" },
            { "name": "Reinforcement Learning", "heading": "Decision Making and Strategy" },

        ],
        "rightSide": [
            {
                "name": "Language Models",
                "content": [
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" },
                    { "name": "BERT & GPT", "heading": "Advanced Contextual Representations" },
                    { "name": "Sentiment Analysis", "heading": "Opinion Mining and Analysis" },
                    { "name": "Named Entity Recognition", "heading": "Entity Classification in Text" },
                    { "name": "Machine Translation", "heading": "Language Conversion and Understanding" },
                    { "name": "Speech Recognition", "heading": "Converting Speech to Text" },
                    { "name": "Chatbots", "heading": "Automated Interaction Systems" },
                    { "name": "Transformer Models", "heading": "Advanced Language Processing" }
                ]
            },
            {
                "name": "Vision Models",
                "content": [
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" },
                    { "name": "Object Detection", "heading": "Identifying Objects in Images" },
                    { "name": "Facial Recognition", "heading": "Identity Verification and Analysis" },
                    { "name": "Image Segmentation", "heading": "Partitioning Images into Segments" },
                    { "name": "Optical Character Recognition", "heading": "Extracting Text from Images" },
                    { "name": "Image Generation", "heading": "Creating Images with GANs" },
                    { "name": "Video Analysis", "heading": "Understanding and Processing Videos" },
                    { "name": "Pose Estimation", "heading": "Determining the Position of Objects in Space" }
                ]
            },
            {
                "name": "Generative Models",
                "content": [
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" },
                    { "name": "GANs", "heading": "Generative Adversarial Networks" },
                    { "name": "VAEs", "heading": "Variational Autoencoders" },
                    { "name": "RNNs", "heading": "Recurrent Neural Networks for Sequences" },
                    { "name": "Transformer-based Models", "heading": "Advanced Models for Generation" },
                    { "name": "Style Transfer", "heading": "Applying Artistic Styles to Images" },
                    { "name": "Music Generation", "heading": "Creating Music with AI" },
                    { "name": "Text-to-Image Generation", "heading": "Creating Images from Descriptions" }
                ]
            },
            {
                "name": "Predictive Models",
                "content": [
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },
                    { "name": "Regression Analysis", "heading": "Predicting Continuous Values" },
                    { "name": "Classification Models", "heading": "Categorizing Data Points" },
                    { "name": "Time Series Forecasting", "heading": "Predicting Future Values in Sequences" },
                    { "name": "Survival Analysis", "heading": "Predicting Time to Event" },
                    { "name": "Market Basket Analysis", "heading": "Understanding Purchase Patterns" },
                    { "name": "Credit Scoring", "heading": "Assessing Creditworthiness" },
                    { "name": "Sales Forecasting", "heading": "Predicting Future Sales" },

                ]
            },
            {
                "name": "Reinforcement Learning",
                "content": [
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" },
                    { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }, { "name": "Q-Learning", "heading": "Reward-based Learning Strategy" },
                    { "name": "Deep Q Networks", "heading": "Combining Q-Learning with Deep Neural Networks" },
                    { "name": "Policy Gradient Methods", "heading": "Learning Policies Directly" },
                    { "name": "Model-Based RL", "heading": "Using Models for Planning" },
                    { "name": "Multi-Agent RL", "heading": "Interacting Agent Systems" },
                    { "name": "Inverse RL", "heading": "Deriving Rewards from Observations" },
                    { "name": "Contextual Bandits", "heading": "Simplified Reinforcement Learning" }
                ]
            }
        ]
    },
];
