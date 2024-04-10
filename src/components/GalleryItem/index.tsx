﻿/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Hai: Comes from this https://github.com/facebook/docusaurus/discussions/7708
// https://github.com/facebook/docusaurus/blob/main/website/docs/playground.mdx
// https://github.com/facebook/docusaurus/blob/main/website/src/components/Playground/index.tsx
// I'm not a bloody frontend dev, I make UIs in ImGui for fucks sake

/* eslint-disable global-require */

// @ts-ignore
import React from 'react';
import clsx from 'clsx';
import Translate from "@docusaurus/core/lib/client/exports/Translate";
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Props {
    name: string;
    image: string;
    url: string;
    urlTS: string;
    requiresVRChat: boolean;
    isUniversal: boolean;
    children: JSX.Element;
}

export function GalleryItem({name, image, url, urlTS, requiresVRChat, isUniversal, children}: Props): JSX.Element {
    return (
        <div className="col col--4 margin-bottom--lg">
            <div className={clsx('card', styles.gallery_card_overall)}>
                <div className={clsx('card__image', styles.gallery_card_image)}>
                    <Link to={url}>
                        <img src={image}/>
                    </Link>
                </div>
                <div className="card__body">
                    <h3>
                        <Link to={url}>
                            {name}
                        </Link>
                    </h3>
                    <p>{children}</p>
                </div>
                <div className="card__footer">
                    {requiresVRChat ? <div className={clsx(styles.gallery_card_requires_vrchat)}>💬 Requires VRChat</div> : ''}
                    {isUniversal ? <div className={clsx(styles.gallery_card_universal)}>🌊 Any Platform</div> : ''}
                </div>
            </div>
        </div>
    );
}