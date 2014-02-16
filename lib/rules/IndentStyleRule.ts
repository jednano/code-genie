﻿/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import IRule = require('../interfaces/IRule');
import ISettings = require('../interfaces/ISettings');


class IndentStyleRule extends events.EventEmitter implements IRule {

	static setting = 'indent_style';

	check(contents: string, settings: ISettings) {
		return this;
	}

	fix(contents: string, settings: ISettings) {
		return this;
	}

	infer(contents: string, settings: ISettings) {
		return this;
	}
}

export = IndentStyleRule;